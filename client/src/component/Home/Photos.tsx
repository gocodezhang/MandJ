import React from 'react';
import Photo from './Photo';

type Props = {
  photos: {
    id: number,
    url: string,
  }[],
}

function Photos({ photos }: Props) {

  return (
    <div className='photos container'>
      {photos.map((photo) => (
        <Photo key={photo.id} url={photo.url}/>
      ))}
    </div>
  )
}

export default Photos;