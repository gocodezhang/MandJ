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
      <ul className='details'>
        <li><b>Participants:</b> {`${event.participants.join(', ')}`}</li>
        <li><b>Time:</b> {`${event.startTime}-${event.endTime}`}</li>
        <li><b>Location:</b> {event.location}</li>
      </ul>
    </div>
  )
}

export default Event;