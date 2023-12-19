import React, {useState, useEffect, createContext} from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './Home/Home';
import Chat from './Chat/Chat';
import Map from './Map/Map';
import NavPanel from './NavPanel/NavPanel';
import '../style/custom.scss';

type AppContextType = {
  user: User;
  family: Family;
  homeRefresh: boolean;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  setFamily: React.Dispatch<React.SetStateAction<Family>>;
  setHomeRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AppContext = createContext<AppContextType>({} as AppContextType);

export type Location = {
  longitude: number;
  latitude: number;
}

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  profilePhoto: string;
  age: number;
  gender: string;
  familyID: number;
  location: Location | null;
}

export type Family = {
  id: number;
  name: string;
  events: Array<any>;
  users: Array<User>;
  photos: Array<any>;
}

function App() {
  const [userID, setUserID] = useState(2);
  const [user, setUser] = useState<User>({} as User);
  const [family, setFamily] = useState<Family>({} as Family);
  const [homeRefresh, setHomeRefresh] = useState<boolean>(false);

  useEffect(() => {
    const url = '//localhost:8080/user';
    axios.get(`${url}/${userID}`)
      .then((response) => {
        console.log(response.data)
        setUser(response.data);
        setHomeRefresh(!homeRefresh);
      })
      .catch((err) => (console.log(err)));
  },[])

  return (
    <AppContext.Provider value={{user, setUser, family, setFamily, homeRefresh, setHomeRefresh}}>
      <NavPanel />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/chat' element={<Chat />} />
        <Route path='/map' element={<Map />}/>
      </Routes>
    </AppContext.Provider>
  )
}

export default App;