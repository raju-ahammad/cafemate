import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Components/Pages/Home'

import Login from './Components/DashBoard/Auth/Login'
import Registration from './Components/DashBoard/Auth/Registration'
import Song from './Components/Pages/Song'
import Menu from './Components/Pages/Menu'
import Wifi from './Components/Pages/Wifi'




const Router = () => {
  
    
    return (
        <>
        <Switch>
            <Route path="/" component={ Home } exact/>
            <Route path="/signup" component={  Registration } exact/>
            <Route path="/login" component={ Login } exact/>
            <Route path="/song" component={ Song } exact/>
            <Route path="/wifi" component={ Wifi } exact/>
            <Route path="/menu" component={ Menu } exact/>
     
        </Switch>
        </>
    )
}

export default Router
