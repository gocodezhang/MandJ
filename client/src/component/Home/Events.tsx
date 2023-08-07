import React from 'react';
import Event from './Event';

function Events({ events }) {

  return (
    <div className='events container'>
      {events.map((event, i) => (
        <Event key={i} event={event}/>
      ))}
    </div>
  )
}

export default Events;