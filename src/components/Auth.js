import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom'
import { connect } from 'react-redux'
import Protected from './Protected'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) //fake async
  },
  signout(cb){
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const Public = () => <h3> Public</h3>

class Login extends Component {
    state = { 
        redirectToReferrer: false
    }
    login = () => {
        fakeAuth.authenticate(() => {
          this.setState(() => ({
            redirectToReferrer: true
          }))
        })
      }
    render() {
        const { from } = this.props.location.state || { from: { pathname: '/'}}
        const { redirectToReferrer } = this.state

        if (redirectToReferrer === true ) {
            return <Redirect to={from}/>
        }

        return (
            <div>
                <p>You must log in to view the page</p>
                <button onClick={this.login}>Log in</button>
            </div> 
        )
    }
}

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true
        ? <Component {...props}/>
        :<Redirect to={{
            pathname:'/login',
            state: { from: props.location}
        }}/>
    )} />
)

const AuthButton = withRouter(({history}) => (
    fakeAuth.isAuthenticated ? (
        <p> 
            Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}> Sign out </button>
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
                <AuthButton/>
                <ul>
                    <li><Link to="/public">Public Page</Link></li>
                    <li><Link to="/protected">Protected Page</Link></li>
                </ul>
                <Route path="/public" component={Public}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path='/protected' component={Protected} />
                </div>
            </Router>
            )
    }
  }


function mapStateToProps({authedUser}) {
  return {authedUser: authedUser ? authedUser : null} 
}

export default connect(mapStateToProps)(Auth)
