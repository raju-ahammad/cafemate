import React, { createContext, useState } from 'react'
import Router from './router'
import useToken from '../src/Components/Utils/useToken.js'

import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Utils/Header';

export const MyContext = createContext({});

function App() {
  const [value, setValue] = useState("closeBtn")
  const [close, setClose] = useState("")
  const [loading, setLoading] = useState(false)
  const { token, setToken } = useToken();

  const logout = () => {
    console.log("Logout");
    localStorage.removeItem("token");
    window.location.reload(); 
  }

    const provider = {
      value, setValue,
      close, setClose,
      token, setToken, logout, 
      loading, setLoading
    }

   ;
  
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
