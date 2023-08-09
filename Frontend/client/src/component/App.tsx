import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Chat from './Chat/Chat';
import Map from './Map/Map';
import NavPanel from './NavPanel/Navpanel';
import '../style/custom.scss';

function App() {

  return (
    <>
      <NavPanel />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/chat' element={<Chat />} />
        <Route path='/map' element={<Map />}/>
      </Routes>
    </>
  )
}

export default App;