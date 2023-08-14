import React from 'react';
import Image from 'react-bootstrap/Image';

function IndividualProfile({ profile }) {

  return (
    <div className='individual-profile'>
      <Image src={profile.profilePhoto} roundedCircle/>
      <div className='name'>{profile.firstName}</div>
    </div>
  )
}

export default IndividualProfile;