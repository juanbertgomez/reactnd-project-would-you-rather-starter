import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Auth from './Auth'

class App extends Component {
      
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  //TODO: hide navbar when path = '/login'
  

  render() {
    const { authedUser } = this.props
    // console.log(authedUser)
    return (
      <div>
        <Auth/>
      </div>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {authedUser: authedUser ? authedUser : null} 
}

export default connect(mapStateToProps)(App)
