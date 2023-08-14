import React from 'react';
import IndividualProfile from './IndividualProfile';
import { User } from '../App';

type Props = {
  profiles: User[]
}

function Profiles({ profiles }: Props) {

  return (
    <div className='profiles container'>
      <h3>Family Members</h3>
      <div className='members container'>
        {profiles.map((profile) => (
          <IndividualProfile key={profile.id} profile={profile}/>
        ))}
      </div>
    </div>
  )
}

export default Profiles;