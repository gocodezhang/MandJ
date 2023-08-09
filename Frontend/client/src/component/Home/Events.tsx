import React from 'react';
import Event from './Event';

type Props = {
  events: {
    name: string,
    participants: string[],
    startTime: string,
    endTime: string,
    location: string,
  }[],
}

function Events({ events }: Props) {

  return (
    <div className='events container'>
      <h2>Upcoming Events</h2>
      {events.map((event, i) => (
        <Event key={i} event={event}/>
      ))}
    </div>
  )
}

export default Events;