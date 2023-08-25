import React, { useContext } from 'react';
import IndividualProfile from './IndividualProfile';
import OwnerProfile from './OwnerProfile';
import { AppContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from '../App';

type Props = {
  profiles: User[]
}

function Profiles({ profiles }: Props) {
  const { user } = useContext(AppContext);
  const profilesWithoutCurrUser = profiles.filter((profile) => (profile.id !== user.id));

  return (
    <div className='profiles container'>
      <h5>
        Family Members
        <FontAwesomeIcon icon={faUser} />
      </h5>
      <div className='members container'>
        <OwnerProfile key={user.id} profile={user} />
        {profilesWithoutCurrUser.map((profile) => (
          <IndividualProfile key={profile.id} profile={profile}/>
        ))}
      </div>
    </div>
  )
}

export default Profiles;