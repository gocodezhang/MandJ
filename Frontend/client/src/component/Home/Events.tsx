import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faPlus } from '@fortawesome/free-solid-svg-icons';
import Event from './Event';
import EventForm from './EventForm';

type Props = {
  events: {
    id: number,
    name: string,
    participants: string[],
    startTime: string,
    endTime: string,
    location: string,
  }[],
}

function Events({ events }: Props) {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <div className='events container'>
      <h5>
        Upcoming Events
        <FontAwesomeIcon icon={faCalendarDays} />
      </h5>
      <div className='event-list'>
        {events.map((event) => (
          <Event key={event.id} event={event}
          eventForm={EventForm}/>
        ))}
      </div>
      <button type='button' id='event-adder' onClick={() => (setShowForm(true))}>
        Add Event
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <EventForm showForm={showForm} setShowForm={setShowForm} event={null}/>
    </div>
  )
}

export default Events;