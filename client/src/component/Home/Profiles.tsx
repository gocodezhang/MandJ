import React from 'react';
import IndividualProfile from './IndividualProfile';

type Props = {
  profiles: {
    userID: number,
    fullName: string,
    firstName: string,
    lastName: string,
    profile: string,
  }[],
}

function Profiles({ profiles }: Props) {

  return (
    <div className='profiles container'>
      <h2>Family Members</h2>
      <div className='members container'>
        {profiles.map((profile) => (
          <IndividualProfile key={profile.userID} profile={profile}/>
        ))}
      </div>
    </div>
  )
}

export default Profiles;