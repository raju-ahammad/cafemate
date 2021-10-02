import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Components/Pages/Home'

import Login from './Components/DashBoard/Auth/Login'
import Registration from './Components/DashBoard/Auth/Registration'
import Song from './Components/Pages/Song'
import Menu from './Components/Pages/Menu'
import Wifi from './Components/Pages/Wifi'
import Dashboard from './Components/Pages/Dashboard'
import CreateEvent from './Components/Pages/CreateEvent'
import { MyContext } from './App'
import Landing from './Components/Pages/Landing'


const Router = () => {

    const context = useContext(MyContext)
  const { isAdmin } = context;
  
    return (
        <>
        <Switch>
            <Route path="/app" component={ Home } exact/>
            <Route path="/" component={ Landing } exact/>
            <Route path="/signup" component={  Registration } exact/>
            <Route path="/login" component={ Login } exact/>
            <Route path="/song" component={ Song } exact/>
            <Route path="/wifi" component={ Wifi } exact/>
            <Route path="/menu" component={ Menu } exact/>
            <Route path="/dashboard" component={isAdmin ? Dashboard : Song } exact/>
            <Route path="/createvent" component={ CreateEvent } exact/>
        </Switch>
        </>
    )
}

export default Router
