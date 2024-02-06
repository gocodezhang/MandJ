import React, { useContext, useState, useEffect } from "react";
import $ from "jquery";
import axios from "axios";
import { format } from "date-fns";
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AppContext } from "../App";

type Props = {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  event: Event | null;
}

type Event = {
  id: number;
  name: string,
  participants: string[],
  startTime: string,
  endTime: string,
  location: string,
}

type FormObject = {
  name: string;
  participants: string[];
  startTime: string;
  endTime: string;
  location: string;
}

function EventForm({ showForm, setShowForm, event }: Props) {
  const { family, homeRefresh, setHomeRefresh } = useContext(AppContext);
  const [formObj, setFormObj] = useState<FormObject>(resetFormObj());

  function resetFormObj() {
    const obj = {
      name: event ? event.name : '',
      participants: event ? event.participants : [],
      startTime: event ? format(new Date(event.startTime),'yyyy-MM-dd HH:mm:ss') : '',
      endTime: event ? format(new Date(event.endTime),'yyyy-MM-dd HH:mm:ss') : '',
      location: event ? event.location : '',
    };
    return obj;
  }

  useEffect(() => {
    setFormObj(resetFormObj());
  },[showForm]);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    let value;
    if (e.target.name === 'startTime' || e.target.name === 'endTime') {
      value = format(new Date(e.target.value), 'yyyy-MM-dd HH:mm:ss');
    } else {
      value = e.target.value;
    }
    setFormObj({
      ...formObj,
      [e.target.name]: value,
    })
  }

  function onChangeHandlerPart(e: React.ChangeEvent<HTMLSelectElement>) {
    var value = $("#participants").val();
    setFormObj({
      ...formObj,
      [e.target.name]: value,
    })
  }

  function closeHanlder() {
    setShowForm(!showForm);
  }

  function addOrUpdateEvent(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    let data = new FormData();
    for (const key in formObj) {
      data.append(key, formObj[key]);
    };
    const url = event ? `http://${process.env.SERVER_IP}:${process.env.SERVER_PORT}/event/${event.id}` : `http://${process.env.SERVER_IP}:${process.env.SERVER_PORT}/event/${family.id}`;
    axios({
      method: event ? 'put' : 'post',
      url: url,
      data: data,
    })
      .then((result) => {
        console.log(result);
        setShowForm(false);
        // setFormObj(resetFormObj());
        setHomeRefresh(!homeRefresh);
      })
      .catch((err) => (console.log(err)));
  }

  return (
    <Modal centered show={showForm} onHide={closeHanlder}>
      <Modal.Header closeButton>
        <Modal.Title>Add your new event!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="event-title">
            <Form.Label>Event Name</Form.Label>
            <Form.Control type="text" name="name" value={formObj.name} onChange={onChangeHandler} />
          </Form.Group>
          <Form.Group controlId="event-participant">
            <Form.Label>Participants</Form.Label>
            <Form.Select id="participants" name="participants" multiple value={formObj.participants} onChange={onChangeHandlerPart}>
              {family.users.map((user) => (
                <option value={`${user.firstName} ${user.lastName}`} key={user.id}>{`${user.firstName} ${user.lastName}`}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Row>
            <Form.Group as={Col} controlId="event-st">
              <Form.Label>Start Time</Form.Label>
              <Form.Control type="datetime-local" name="startTime" value={formObj.startTime} onChange={onChangeHandler}/>
            </Form.Group>
            <Form.Group as={Col} controlId="event-et">
              <Form.Label>End Time</Form.Label>
              <Form.Control type="datetime-local" name="endTime" value={formObj.endTime} onChange={onChangeHandler}/>
            </Form.Group>
          </Row>
          <Form.Group controlId="event-location">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" name="location" value={formObj.location} onChange={onChangeHandler}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={addOrUpdateEvent}>Submit</Button>
      </Modal.Footer>
    </Modal>

  )
}

export default EventForm;