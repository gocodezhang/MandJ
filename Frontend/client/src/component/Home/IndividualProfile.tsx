import React from 'react';
import Image from 'react-bootstrap/Image';
import { User } from '../App';

type Props = {
  profile: User;
}

function IndividualProfile({ profile }: Props) {

  return (
    <div className='individual-profile'>
      <Image src={profile.profilePhoto} roundedCircle/>
      <div className='name'>{profile.firstName}</div>
    </div>
  )
}

export default IndividualProfile;