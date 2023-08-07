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
      {profiles.map((profile) => (
        <IndividualProfile key={profile.userID} profile={profile}/>
      ))}
    </div>
  )
}

export default Profiles;