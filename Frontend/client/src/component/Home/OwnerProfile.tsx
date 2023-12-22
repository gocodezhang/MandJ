import React, { useContext } from 'react';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import { User } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../App';

type Props = {
  profile: User;
}

function OwnerProfile({ profile }: Props) {
  const { user, setUser } = useContext(AppContext);

  function uploadHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`;
        const data = {
          file: reader.result,
          upload_preset: 'c0f3xm7p',
        }
        let profilePhoto;
        axios.post(url, data)
          .then((result) => (result.data.secure_url))
          .then((apiURL) => {
            const url = `//localhost:8080/user/${profile.id}/userinfo`;
            const data = new FormData();
            data.append('profilePhoto', apiURL)
            profilePhoto = apiURL;
            return axios.put(url, data);
          })
          .then((result) => {
            console.log(result)
            setUser({...user, profilePhoto: profilePhoto});
          })
          .catch((err) => (console.log(err)));
      })
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <div className='individual-profile'>
      <Image src={profile.profilePhoto} roundedCircle/>
      <div className='name'>{profile.firstName}</div>
      <div className='profile-uploader'>
        <label htmlFor='profile-upload'>
          <FontAwesomeIcon icon={faCamera} />
        </label>
        <input type='file' id='profile-upload' accept='image/*,.pdf' onChange={uploadHandler}/>
      </div>
    </div>
  )
}

export default OwnerProfile;