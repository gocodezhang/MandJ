import React, {useContext, useEffect} from 'react';
import Profiles from './Profiles';
import Photos from './Photos';
import Events from './Events';
import axios from 'axios';
import { AppContext } from '../App';
import { profiles, photos, upcomingEvents } from '../../Sampledata.js';

function Home() {
  const { user, family, setFamily, homeRefresh } = useContext(AppContext);

  useEffect(() => {
    if (user && user.familyID) {
      const url = `http://${process.env.SERVER_IP}:${process.env.SERVER_PORT}/family`;
      const { familyID } = user
      axios.get(`${url}/${familyID}`)
        .then((response) => {
          console.log(response.data);
          setFamily(response.data);
        })
        .catch((err) => (console.log(err)));
    }
  },[homeRefresh])


  return Object.keys(family).length === 0 ? null : (
    <div className='home'>
      <Profiles profiles={family.users}/>
      <Photos photos={family.photos}/>
      <Events events={family.events}/>
    </div>
  )
}

export default Home;