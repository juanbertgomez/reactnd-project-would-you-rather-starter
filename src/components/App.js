import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LogIn from './LogIn'
import { Nav, NavItem } from 'react-bootstrap'
import { handleAuth } from '../utils/helper'
import NewQuestion from './NewQuestion'
import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
      handleAuth.isAuthenticated === true
      ? <Component {...props}/>
      :<Redirect to={{
          pathname:'/login',
          state: { from: props.location}
      }}/>
  )} />
)

const LogOutButton = withRouter(({ history }) => (
       
   <NavItem onClick={() => {
      handleAuth.signout(() => history.push('/'))
      }}>Sign out</NavItem>
    ))

class App extends Component {
      
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  //TODO: hide navbar when path = '/login'
  

  render() {
    const authed = handleAuth.isAuthenticated
    const { name, avatar } = this.props
    return (
      <Router>
                <div>
                {authed !== false &&
                    <div>
                <Nav bsStyle="tabs" >
                <LinkContainer to="/dashboard">
                    <NavItem>Home</NavItem>
                </LinkContainer>
                <LinkContainer to="/new">
                    <NavItem>New Question</NavItem>
                </LinkContainer>
                <LinkContainer to="/leaders">
                    <NavItem>Leaders</NavItem>
                </LinkContainer>
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='nav-avatar'
                />
                <LogOutButton/>
                </Nav>
                </div>
                    
                  }
                
                    
                <Switch>
                    <Route exact path="/" render={() => (
                        authed ? (
                          <Redirect to="/dashboard"/>
                        ) : (
                            <Route path="/login" component={LogIn}/>
                        )
                      )}/>
                    <Route path="/login" component={LogIn}/>
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                    <PrivateRoute path='/new' component={NewQuestion} />
                    <PrivateRoute path='/question/:id' component={QuestionPage}/> 
                    <PrivateRoute path='/leaders' component={LeaderBoard}/>
                </Switch>
                </div>
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
