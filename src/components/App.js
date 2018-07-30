import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import SigIn from './SignIn'
import LogIn from './LogIn'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Nav/>
          <div>
            <Route path='/signin' component={SigIn}/>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/question/:id' component={QuestionPage}/>
            <Route path='/new' component={NewQuestion}/>
            <Route path='/leaders' component={LeaderBoard}/>
            <Route path='/login' component={LogIn}/>
          </div> 
        </div>
      </Router>
    )
  }
}

export default connect()(App)
