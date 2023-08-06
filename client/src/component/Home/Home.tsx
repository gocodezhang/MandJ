import React from 'react';
import Profiles from './Profiles';
import { profiles } from '../../Sampledata.js';

function Home() {
  return (
    <Profiles profiles={profiles}/>
  )
}

export default Home;