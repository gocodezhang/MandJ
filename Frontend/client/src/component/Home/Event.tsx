import React, { useState, useContext } from 'react';
import axios from 'axios';
import EventForm from './EventForm';
import { AppContext } from '../App';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faFilePen } from '@fortawesome/free-solid-svg-icons';

type Props = {
  event: {
    id: number;
    name: string,
    participants: string[],
    startTime: string,
    endTime: string,
    location: string,
  }
}
function Event({ event }: Props) {
  const { homeRefresh, setHomeRefresh } = useContext(AppContext);
  const [editForm, setEditForm] = useState<boolean>(false);
  const formatedStartTime = format(new Date(event.startTime), 'haaa do MMM yyyy')
  const formatedEndTime = format(new Date(event.endTime), 'haaa do MMM yyyy')

  function deleteHandler() {
    const url = `//localhost:8080/event/${event.id}`;
    axios.delete(url)
      .then((result) => {
        console.log(result);
        setHomeRefresh(!homeRefresh);
      })
      .catch((err) => (console.log(err)));
  }

  return (
    <div className='event'>
      <p>{event.name}</p>
      <ul className='details'>
        <li><b>Participants:</b> {`${event.participants.join(', ')}`}</li>
        <li><b>Time:</b> {`${formatedStartTime} - ${formatedEndTime}`}</li>
        <li><b>Location:</b> {event.location}</li>
      </ul>
      <button type='button' onClick={deleteHandler}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <button type='button' onClick={() => (setEditForm(!editForm))}>
        <FontAwesomeIcon icon={faFilePen} />
      </button>
      <EventForm showForm={editForm} setShowForm={setEditForm} event={event} />
    </div>
  )
}

export default Event;