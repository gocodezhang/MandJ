import React, { useState } from 'react';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MessageInput({ user }) {
    const [newMessage, setNewMessage] = useState('')

    function handleSubmitMessage() {
        const url = `//localhost:8080/chat/${user.id}`;
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
        <InputGroup>
            <Form.Control
                placeholder="Enter message"
                aria-describedby="submit-message"
                value={newMessage}
                onChange={(e) => (setNewMessage(e.target.value))}
            />
            <Button type="button" variant="outline-secondary" id="submit-message" onClick={handleSubmitMessage}>
                Button
            </Button>
        </InputGroup>
    )
}

export default MessageInput;