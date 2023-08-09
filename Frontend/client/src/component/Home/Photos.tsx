import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

type Props = {
  photos: {
    id: number,
    url: string,
  }[],
}

function Photos({ photos }: Props) {

  return (
    <Carousel className="photos container" variant='dark' interval={null}>
      {photos.map((photo) => (
        <Carousel.Item key={photo.id}>
          <img className="photo" src={photo.url} />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Photos;