import React from 'react';
import IndividualProfile from './IndividualProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from '../App';

type Props = {
  profiles: User[]
}

function Profiles({ profiles }: Props) {

  return (
    <div className='profiles container'>
      <h5>
        Family Members
        <FontAwesomeIcon icon={faUser} />
      </h5>
      <div className='members container'>
        {profiles.map((profile) => (
          <IndividualProfile key={profile.id} profile={profile}/>
        ))}
      </div>
    </div>
  )
}

export default Profiles;