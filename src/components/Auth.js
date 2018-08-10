import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import LogIn from './LogIn'
import { MenuItem, DropdownButton, Col, Row } from 'react-bootstrap'
import { handleAuth } from '../utils/helper'

const Public = () => <h3> Public</h3>



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

const AuthButton = withRouter(({history}) => (    
    handleAuth.isAuthenticated ? (
        <p> 
            Welcome! <button onClick={() => {
        handleAuth.signout(() => history.push('/'))
      }}> Sign out </button>
        <Home/>
        </p>
    ) : (
        <p> You are not logged in.</p> 
    )
))


class Auth extends Component {
    render () {
        return (
            <Router>
                <div>
                <ul>
                    <li><Link to="/dashboard">Protected Page</Link></li>
                </ul>
                <Route path="/public" component={Public}/>
                <Route path="/login" component={LogIn}/>
                <PrivateRoute path='/dashboard' component={Home} />
                </div>
            </Router>
            )
    }
  }


function mapStateToProps({authedUser, users}) {
  return {
      authedUser: authedUser ? authedUser : null,
      userIds: users ? Object.keys(users): null ,
      users
    } 
}

export default connect(mapStateToProps)(Auth)
