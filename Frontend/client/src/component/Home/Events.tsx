import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
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
      <h5>
        Upcoming Events
        <FontAwesomeIcon icon={faCalendarDays} />
      </h5>
      <div className='event-list'>
        {events.map((event, i) => (
          <Event key={i} event={event}/>
        ))}
      </div>
    </div>
  )
}

export default Events;