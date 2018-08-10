import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import SigIn from './SignIn'
import NoMatch from './NoMatch'


class Protected extends Component {
    render() {
        return ( 
            <div>
                <NavBar/> 
                <Switch>  
                  <Route path='/signin' component={SigIn}/> 
                  <Route path='/' exact component={Dashboard}/> 
                  <Route path='/question/:id' component={QuestionPage}/> 
                  <Route path='/new' component={NewQuestion}/> 
                  <Route path='/leaders' component={LeaderBoard}/> 
                  <Route component={NoMatch}/> 
                </Switch>
            </div>
          )
    }
}

export default Protected
 