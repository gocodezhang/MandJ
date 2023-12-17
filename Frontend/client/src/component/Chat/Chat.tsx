import React, { useContext } from 'react';
import { AppContext } from '../App';
import { StompSessionProvider } from 'react-stomp-hooks';
import MessageInput from './MessageInput';
import FamilyMessages from './FamilyMessages';

function Chat() {
  const { user } = useContext(AppContext);

  return (
    <StompSessionProvider
      url='ws://localhost:8080/mj-websocket'
      onConnect={(frame) => console.log(`connected to ${frame}`)}
      onDisconnect={() => (console.log('disconnected'))}
      onWebSocketError={(err) => (console.log(err))}
      onStompError={(frame) => (console.log(frame))}
    >
      This page is for chat!
      <FamilyMessages user={user}/>
      <MessageInput user={user}/>
    </StompSessionProvider>
  )
}

export default Chat;