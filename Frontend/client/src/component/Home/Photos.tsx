import React, { useContext } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../App';

type Props = {
  photos: {
    id: number,
    url: string,
    timestamp: Date;
  }[],
}

function Photos({ photos }: Props) {
  const { user, homeRefresh, setHomeRefresh } = useContext(AppContext);

  function uploadHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`;
        const data = {
          file: reader.result,
          upload_preset: 'c0f3xm7p',
        }
        let familyPhoto;
        axios.post(url, data)
          .then((result) => (result.data.secure_url))
          .then((apiURL) => {
            const url = `//localhost:8080/photo/${user.familyID}`;
            const data = new FormData();
            data.append('url', apiURL)
            familyPhoto = apiURL;
            return axios.post(url, data);
          })
          .then((result) => {
            console.log(result);
            setHomeRefresh(!homeRefresh);
          })
          .catch((err) => (console.log(err)));
      })
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <div className='photos-upload container'>
      <Carousel className="photos container" variant='dark' interval={null}>
        {photos.map((photo) => (
          <Carousel.Item key={photo.id}>
            <img className="photo" src={photo.url} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div id='photo-uploader'>
        <label htmlFor='photo-upload'>
          Upload
          <FontAwesomeIcon icon={faUpload} />
        </label>
        <input type='file' id='photo-upload' accept='image/*,.pdf' onChange={uploadHandler}/>
      </div>
    </div>
  )
}

export default Photos;