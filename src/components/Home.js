import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import LogIn from './LogIn'
import NoMatch from './NoMatch'
import { handleAuth } from '../utils/helper'

class Home extends Component {
    render() {
        return ( 
            <div>
                <NavBar/> 
                <Switch>
                  <Route path='/login' component={LogIn}/> 
                  <Route path='/dashboard' exact component={Dashboard}/> 
                  <Route path='/question/:id' component={QuestionPage}/> 
                  <Route path='/new' component={NewQuestion}/> 
                  <Route path='/leaders' component={LeaderBoard}/> 
                  <Route component={NoMatch}/> 
                </Switch>
            </div>
          )
    }
}

export default Home
 