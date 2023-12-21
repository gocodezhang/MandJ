import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import { AppContext, Location, Users } from '../App';
import Spinner from 'react-bootstrap/Spinner';
import Marker from './Marker';

function Map({ user }) {
  const [userLocation, setUserLocation] = useState<null | Location>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [usersForMarker, setUsersForMarker] = useState<Users>([])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((geoPosition) => {
        const { coords, timestamp } = geoPosition
        const url = `//localhost:8080/user/${user.id}`

        axios.put(url, {
          longitude: coords.longitude,
          latitude: coords.latitude,
        })
          .then(() => {
            setUserLocation({
              longitude: coords.longitude,
              latitude: coords.latitude,
            })
            const familyUsersURL = `//localhost:8080/user/familyUsers/${user.familyID}`
            return axios.get(familyUsersURL)
          })
          .then(({ data }) => {
            console.log('fetch users location')
            const usersWithLocation = data.filter((user) => (user.location))
            setUsersForMarker(usersWithLocation)
          })
          .catch((err) => (console.log(err)))
      },
      (err) => {
        console.log(err)
        setErrorMessage('Your location information is required to enable map feature')
      })
    }
  },[])

  // useEffect(() => {
  //   const familyUsersURL = `//localhost:8080/user/familyUsers/${user.familyID}`
  //   axios.get(familyUsersURL)
  //     .then(({ data }) => {
  //       const usersWithLocation = data.filter((user) => (user.location))
  //       setUsersForMarker(usersWithLocation)
  //     })
  // },[])

  return (
    <div className='container my-3' style={{height: '650px'}}>
      {errorMessage && 
        <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
          <span className='text-center text-danger fs-4'>{errorMessage}</span>
        </div>
      }
      {!errorMessage && !userLocation && 
        <div className='d-flex w-100 h-100 justify-content-center align-items-center'><Spinner animation='border'/></div>
      }
      {!errorMessage && userLocation && 
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={{lat: userLocation?.latitude, lng: userLocation?.longitude}}
          defaultZoom={11}
        >
          {usersForMarker.map((user) => (
            <Marker 
              key={user.id}
              lat={user.location?.latitude}
              lng={user.location?.longitude}
              user={user}
            />
          ))}
        </GoogleMapReact>
      }
    </div>
  )
}

export default Map;