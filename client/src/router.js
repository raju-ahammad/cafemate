import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Components/Pages/Home'

import { MyContext } from './App'
import Login from './Components/DashBoard/Auth/Login'
import Registration from './Components/DashBoard/Auth/Registration'




const Router = () => {
  
    const context = useContext(MyContext)
    const { token } = context;
    return (
        <>
        <Switch>
            <Route path="/" component={ Home } exact/>
            <Route path="/signup" component={  Registration } exact/>
            <Route path="/login" component={ Login } exact/>
        </Switch>
        </>
    )
}

export default Router
