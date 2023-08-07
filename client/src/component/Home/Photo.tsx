import React from 'react';

type Props = {
  url: string;
}

function Photo({ url }: Props) {
  return (
    <img src={url} alt='family'/>
  )

}

export default Photo;