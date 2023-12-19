import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import { AppContext, Location } from '../App';
import Spinner from 'react-bootstrap/Spinner';

function Map() {
  const { user } = useContext(AppContext)
  const [userLocation, setUserLocation] = useState<null | Location>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (Object.keys(user).length && navigator.geolocation) {
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
          })
          .catch((err) => (console.log(err)))
      },
      (err) => {
        console.log(err)
        setErrorMessage('Your location information is required to enable map feature')
      })
    }
  },[user])

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
        </GoogleMapReact>
      }
    </div>
  )
}

export default Map;