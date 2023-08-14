import React from 'react';
import { format } from 'date-fns';

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
  const formatedStartTime = format(new Date(event.startTime), 'haaa do MMM yyyy')
  const formatedEndTime = format(new Date(event.endTime), 'haaa do MMM yyyy')

  return (
    <div className='event'>
      <h5>{event.name}</h5>
      <ul className='details'>
        <li><b>Participants:</b> {`${event.participants.join(', ')}`}</li>
        <li><b>Time:</b> {`${formatedStartTime} - ${formatedEndTime}`}</li>
        <li><b>Location:</b> {event.location}</li>
      </ul>
    </div>
  )
}

export default Event;