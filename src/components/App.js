import React, { Component, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LogIn from './LogIn'
import LogOut from './LogOut'
import { Nav, NavItem } from 'react-bootstrap'
import { handleAuth } from '../utils/helper'
import NewQuestion from './NewQuestion'
import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'
import NoMatch from './NoMatch'
import LoadingBar from 'react-redux-loading'

const PrivateRoute = ({ component: Component, ...rest}) => (
    
  <Route {...rest} render={(props) => (
    handleAuth.isAuthenticated !== false
      ? <Component {...props}/>
      :<Redirect to={{
          pathname:'/login',
          state: { from: props.location}
      }}/>
  )} />
)


class App extends Component {
      
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  } 

  render() {
    
    const { name, avatar, authedUser } = this.props
    return (
        <Router>
            <Fragment>
                <LoadingBar />
                {this.props.loading === true ? null : 
                <div>
                    {authedUser !== null && 
                    
                    <div>
                    <Nav bsStyle="tabs" >
                        <LinkContainer to="/dashboard">
                            <NavItem>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/add">
                            <NavItem>New Question</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/leaderboard">
                            <NavItem>Leaders</NavItem>
                        </LinkContainer>
                        <NavItem disabled>Hello {name}
                        <img
                            src={avatar}
                            alt={`Avatar of ${name}`}
                            className='nav-avatar'
                        />
                        </NavItem>
                        <LogOut/>
                    </Nav>
                    </div>
                    }
                
                <Switch>
                    <Route path="/login" component={LogIn}/>
                    <PrivateRoute path='/dashboard' component={Dashboard}  authedUser={this.props.authedUser}/>
                    <PrivateRoute path='/add' component={NewQuestion}  authedUser={this.props.authedUser}/>
                    <PrivateRoute path='/questions/:id' component={QuestionPage} authedUser={this.props.authedUser}/> 
                    <PrivateRoute path='/leaderboard' component={LeaderBoard} authedUser={this.props.authedUser}/>
                    <Redirect from='/' exact to='/dashboard'/>
                    <Route component={NoMatch}/>
                </Switch>
                </div>
                }
                </Fragment>
            </Router>
    )
  }
}

function mapStateToProps({authedUser, users}) {
  const user = users[authedUser]
  
  return {
      authedUser: authedUser ? authedUser : null,
      userIds: users ? Object.keys(users): null ,
      name: user ? user.name :  null,
      avatar: user ? user.avatarURL : null,
      user: {name: user ? user.name :  null, avatar: user ? user.avatarURL : null},
      users
  } 
}

export default connect(mapStateToProps)(App)
