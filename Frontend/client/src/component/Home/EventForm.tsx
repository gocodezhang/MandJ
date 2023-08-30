import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

type Props = {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormObject = {
  name: string;
  participants: string[];
  startTime: Date | null;
  endTime: Date | null;
  location: string;
}

function EventForm({ showForm, setShowForm}: Props) {
  const [formObj, setFormObj] = useState<FormObject>({
    name: '',
    participants: [],
    startTime: null,
    endTime: null,
    location: '',
  });

  return (
    <Modal centered show={showForm} onHide={() => (setShowForm(false))}>
      <Modal.Header closeButton>
        <Modal.Title>Add your new event!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="event-title">
            <Form.Label>Event Name</Form.Label>
            <Form.Control type="text" name="name"/>
          </Form.Group>
          <Form.Group controlId="event-participant">
            <Form.Label>Participants</Form.Label>
            <Form.Control type="text" placeholder="Add names separated by comma" name="participants"/>
          </Form.Group>
          <Row>
            <Form.Group as={Col} controlId="event-st">
              <Form.Label>Start Time</Form.Label>
              <Form.Control type="datetime-local" name="startTime"/>
            </Form.Group>
            <Form.Group as={Col} controlId="event-et">
              <Form.Label>End Time</Form.Label>
              <Form.Control type="datetime-local" name="endTime"/>
            </Form.Group>
          </Row>
          <Form.Group controlId="event-location">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" name="location"/>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>

  )
}

export default EventForm;