import React, { createContext, useState } from 'react'
import Router from './router'
import useToken from '../src/Components/Utils/useToken.js'

import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Utils/Header';
import axios from 'axios';

export const MyContext = createContext({});
const url = "/api/allevents"

function App() {
  const [value, setValue] = useState("closeBtn")
  const [close, setClose] = useState("")
  const [loading, setLoading] = useState(true)
  const { token, setToken,setUserName, userName, isAdmin, isArtist, setisAdmin, setisArtist } = useToken();
  const [allevents, setAllEvents] = useState([])

  console.log("admin artist: ",isAdmin, isArtist);

  const logout = () => {
    console.log("Logout");
    localStorage.clear()
    window.location.reload(); 
  }
  const fetchAllEvents = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      setLoading(false)
      setAllEvents(res.data);
    } catch (error) {
      
    }
  }

    const provider = {
      value, setValue,
      close, setClose,
      token, setToken, logout, 
      loading, setLoading, setUserName, userName, allevents,setisAdmin, setisArtist,
      setAllEvents,isAdmin, isArtist,
      fetchAllEvents
    }
console.log("userName", userName);
  
  return (
    <BrowserRouter>
      <MyContext.Provider value={provider}>
      <div className="App">
        <Header/>
        <Router/>
      </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
