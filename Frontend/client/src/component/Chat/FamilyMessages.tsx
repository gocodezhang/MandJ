import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import { useSubscription } from 'react-stomp-hooks';
import { Family, User } from '../App';
import SingleMessage from './SingleMessage';

type Message = {
    id: number;
    createdAt: string;
    text: string;
    user: User;
    familyChat: Family;
  }
  
type Messages = Message[];

function FamilyMessages({ user }) {
  const [messages, setMessages] = useState<Messages>([] as Messages);
  const lastmessageRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const url = `http://${process.env.SERVER_IP}:${process.env.SERVER_PORT}/chat/${user.familyID}`;
    axios.get(url)
      .then(({ data }) => {
        setMessages(data)
      })
      .catch((err) => (console.log(err)))
  },[])

  useEffect(() => {
    lastmessageRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  },[messages])

  useSubscription(`/familyChat/${user.familyID}`, (IMessage) => {
    const message = JSON.parse(IMessage.body)
    setMessages([...messages, message])
  })

  return (
    <div className='container bg-white rounded p-3 my-2 overflow-y-auto' style={{height: '650px'}} >
      {messages.map((message) => (
        <SingleMessage key={message.id} message={message} currentUser={user} />
      ))}
      <div ref={lastmessageRef}></div>
    </div>
  )
}

export default FamilyMessages;