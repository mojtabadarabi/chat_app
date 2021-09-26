import React from 'react'
import { Switch, Route } from 'react-router'
import LoginPage from './components/login/LoginPage'
import Dashboard from './components/dashboard/Dashboard'
import './app.css'

function App() {
    return (
        <div className='container'>
            <Switch>
                <Route exact path='/' render={()=><Dashboard/>}/>
            </Switch>
        </div>
    )
}

export default App
