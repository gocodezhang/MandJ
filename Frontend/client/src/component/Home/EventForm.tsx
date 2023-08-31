import React, { useContext, useState } from "react";
import $ from "jquery";
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AppContext } from "../App";

type Props = {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormObject = {
  name: string;
  participants: string[];
  startTime: string;
  endTime: string;
  location: string;
}

function EventForm({ showForm, setShowForm}: Props) {
  const { family } = useContext(AppContext);
  const [formObj, setFormObj] = useState<FormObject>({
    name: '',
    participants: [],
    startTime: '',
    endTime: '',
    location: '',
  });

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    var value;
    if (e.target.name == 'participants') {
      value = $("#participants").val();
    } else {
      value = e.target.value;
    }
    setFormObj({
      ...formObj,
      [e.target.name]: value,
    })
  }

  return (
    <Modal centered show={showForm} onHide={() => (setShowForm(false))}>
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
            <Form.Select id="participants" name="participants" multiple value={formObj.participants} onChange={onChangeHandler}>
              {family.users.map((user) => (
                <option value={user.id} key={user.id}>{`${user.firstName} ${user.lastName}`}</option>
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
    </Modal>

  )
}

export default EventForm;