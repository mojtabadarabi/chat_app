import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router'
import LoginPage from './components/login/LoginPage'
import Dashboard from './components/dashboard/Dashboard'
import './app.css'
import ContextProvider from './context/ContextProvider'
import PrivateRoute from './components/privaeRoute/PrivateRoute'
import PublicRoute from './components/privaeRoute/PublicRoute'

function App() {
    
    return (
        <ContextProvider>
            <div className='container'>
                <Switch>
                    <Route exact path='/' render={()=><PrivateRoute ><Dashboard/></PrivateRoute>}/>
                    <Route exact path='/login' render={()=><PublicRoute><LoginPage/></PublicRoute>}/>
                </Switch>
            </div>
        </ContextProvider>
    )
}

export default App
