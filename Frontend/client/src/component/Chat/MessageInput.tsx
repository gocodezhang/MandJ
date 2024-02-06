import React, { useState } from 'react';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function MessageInput({ user }) {
    const [newMessage, setNewMessage] = useState('')

    function handleSubmitMessage() {
        const url = `http://${process.env.SERVER_IP}:${process.env.SERVER_PORT}/chat/${user.id}`;
        const data = new FormData();
        data.append('text', newMessage);
        axios.post(url, data)
            .then(() => {
                console.log('messaged added')
                setNewMessage('')
            })
            .catch((err) => (console.log(err)))
    }

    return (
        <InputGroup className='container px-0'>
            <Form.Control
                placeholder="Enter message"
                aria-describedby="submit-message"
                value={newMessage}
                onChange={(e) => (setNewMessage(e.target.value))}
            />
            <Button type="button" variant="outline-primary" id="submit-message" onClick={handleSubmitMessage}>
                <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
        </InputGroup>
    )
}

export default MessageInput;