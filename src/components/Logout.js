import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavItem } from 'react-bootstrap'
import {handleUnAutheUser } from '../actions/authedUser'
import { handleAuth } from '../utils/helper'
import {
    withRouter
  } from 'react-router-dom'

class LogOut extends Component {

    logout = (e) => {

        e.preventDefault() 
        this.props.dispatch(handleUnAutheUser(this.props.authedUser)) 

        handleAuth.signout(() => this.props.history.push('/'))
      }

    render() {
        return (
            <NavItem onClick={this.logout}>Sign out</NavItem>
        ) 
    }
}

function mapStateToProp({authedUser}){
    return {
        authedUser
    }
}

export default withRouter(connect(mapStateToProp)(LogOut))