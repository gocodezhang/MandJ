import React, { useContext } from 'react';
import { AppContext } from '../App';
import { StompSessionProvider } from 'react-stomp-hooks';
import MessageInput from './MessageInput';
import FamilyMessages from './FamilyMessages';

function Chat() {
  const { user } = useContext(AppContext);

  return (
    <StompSessionProvider
      url={`ws://${process.env.SERVER_IP}:${process.env.SERVER_PORT}/mj-websocket`}
      onConnect={(frame) => console.log(`connected to ${frame}`)}
      onDisconnect={() => (console.log('disconnected'))}
      onWebSocketError={(err) => (console.log(err))}
      onStompError={(frame) => (console.log(frame))}
    >
      {Object.keys(user).length && 
      <>
        <FamilyMessages user={user}/>
        <MessageInput user={user}/>
      </>}
    </StompSessionProvider>
  )
}

export default Chat;