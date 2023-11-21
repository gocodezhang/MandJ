import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from '../App';
import { Client } from '@stomp/stompjs';

type Message = {
  id: number;
  createdAt: string;
  text: string;
  familyId: number;
  userId: number;
  userName: string;
}

type Messages = Message[];

function Chat() {
  const { user } = useContext(AppContext);
  const [messages, setMessages] = useState<Messages>({} as Messages);

  // seting up ws client
  console.log('ws run');
  const client = new Client({
    brokerURL: 'wss://localhost:8080/ws-connect',
  })
  client.onConnect = function(frame) {
    console.log(`connected to ${frame}`);
    client.subscribe('/topic/real_time_message', (response) => {
      console.log(response.body);
      // setMessages(response.body);
    })
  }
  client.onWebSocketError = (error) => {
    console.log(error);
  }
  client.onStompError = (frame) => {
    console.log(frame);
  }

  useEffect(() => {
    client.activate();
    // client.publish({
    //   destination: `/app/message/${user.id}`,
    //   body: 'testing',
    // })
  },[])

  return (
    <div>
      This page is for chat!
    </div>
  )
}

export default Chat;