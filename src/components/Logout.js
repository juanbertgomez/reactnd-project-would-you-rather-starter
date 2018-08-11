import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

class Logout extends Component {
    render () {
        return (
            <NavItem onClick={() => {
                handleAuth.signout(() => history.push('/'))
                }}>Sign out</NavItem>
        )
    }

export default withRouter(Logout)