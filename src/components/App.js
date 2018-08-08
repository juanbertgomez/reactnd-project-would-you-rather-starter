import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import SigIn from './SignIn'
import LogIn from './LogIn'
import NoMatch from './NoMatch'

class App extends Component {
      
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  //TODO: hide navbar when path = '/login'
  

  render() {
    const { authedUser } = this.props
    // console.log(authedUser)
    return (
      <Router>
        <div className='container'>
         { Object.keys(authedUser).length === 0 ? 
         <Route path='/' component={SigIn}/>
          : 
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
      }
          
            
          
        </div>
      </Router>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {authedUser: authedUser ? authedUser : null} 
}

export default connect(mapStateToProps)(App)
