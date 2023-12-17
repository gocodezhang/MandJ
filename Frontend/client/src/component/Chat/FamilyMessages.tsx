import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { AppContext } from '../App';
import { useSubscription } from 'react-stomp-hooks';

type Message = {
    id: number;
    createdAt: string;
    text: string;
    familyId: number;
    userId: number;
    userName: string;
  }
  
type Messages = Message[];

function FamilyMessages({ user }) {
  const [messages, setMessages] = useState<Messages>([] as Messages);
  function subscriptionCB({ body }) {
    const message = JSON.parse(body)
    console.log(message)
  }

  useEffect(() => {
    const url = `//localhost:8080/chat/${user.familyID}`;
    axios.get(url)
      .then(({ data }) => {
        setMessages(data)
      })
      .catch((err) => (console.log(err)))
  },[])

  useSubscription('/familyChat/testing', (IMessage) => {
    const message = JSON.parse(IMessage.body)
    setMessages([...messages, message])
  })

  return (
    <div>
      {messages.map((message) => (
        <a key={message.id}>{message.text}</a>
      ))}
    </div>
  )
}

export default FamilyMessages;