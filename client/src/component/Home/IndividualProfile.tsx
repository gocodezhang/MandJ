import React from 'react';
import Image from 'react-bootstrap/Image';

function IndividualProfile({ profile }) {

  return (
    <div className='individual-profile'>
      <Image src={profile.profile} roundedCircle/>
      <div className='name'>{profile.firstName}</div>
    </div>
  )
}

export default IndividualProfile;