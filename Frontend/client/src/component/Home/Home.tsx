import React from 'react';
import Profiles from './Profiles';
import Photos from './Photos';
import Events from './Events';
import { profiles, photos, upcomingEvents } from '../../Sampledata.js';

function Home() {
  return (
    <>
      <Profiles profiles={profiles}/>
      <Photos photos={photos}/>
      <Events events={upcomingEvents}/>
    </>
  )
}

export default Home;