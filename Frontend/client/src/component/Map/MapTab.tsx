import React, { useContext } from 'react';
import { AppContext } from '../App';
import Map from './Map';

function MapTab() {
  const { user } = useContext(AppContext)

  return Object.keys(user).length && <Map user={user} />
}

export default MapTab;