import React from 'react';

function IndividualProfile({ profile }) {

  return (
    <div className='individual-profile'>
      <img src={profile.profile} alt='user photo'/>
      <div>{profile.firstName}</div>
    </div>
  )
}

export default IndividualProfile;