import React from 'react';
import IndividualProfile from './IndividualProfile';

function Profiles({ profiles }) {

  return (
    <div className='profiles container'>
      {profiles.map((profile) => (
        <IndividualProfile key={profile.userID} profile={profile}/>
      ))}
    </div>
  )
}

export default Profiles;