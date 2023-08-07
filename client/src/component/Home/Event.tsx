import React from 'react';

type Props = {
  event: {
    name: string,
    participants: string[],
    startTime: string,
    endTime: string,
    location: string,
  }
}
function Event({ event }: Props) {

  return (
    <div className='event'>
      <h3>{event.name}</h3>
      <p>Time: {`${event.startTime}-${event.endTime}`}</p>
      <p>Location: {event.location}</p>
    </div>
  )
}

export default Event;