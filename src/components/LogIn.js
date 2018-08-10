import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MenuItem, DropdownButton, Col, Row } from 'react-bootstrap'
import { handleAuthedUser } from '../actions/authedUser'
import {
    Redirect
  } from 'react-router-dom'

  import { handleAuth } from '../utils/helper'

  class LogIn extends Component {
    
    state = { 
        redirectToReferrer: false
    }
    login = (e) => {

        e.preventDefault() 
        const user = e.target.id 
        this.props.dispatch(handleAuthedUser(user)) 

        handleAuth.authenticate(() => {
          this.setState(() => ({
            redirectToReferrer: true
          }))
        })
      }
    render() {
        const {userIds, users} = this.props
        const { from } = this.props.location.state || { from: { pathname: '/'}}
        const { redirectToReferrer } = this.state

        if (redirectToReferrer === true ) {
            return <Redirect to={from}/>
        }

        return (
            <div className='card'>
                <Row>
                <Col>
                    <Col xs={8} xsoffset={2}>
                    <h3 className='question-title'>Welcome to the Would you rather app</h3>
                    <h3 className='question-text'>Please Signing</h3> 
                    </Col>
                    <Col  xs={8} xsoffset={4}>
                    <DropdownButton
                    bsStyle="primary"
                    title="SIGN IN"
                    >
                    {userIds ? userIds.map((id) => 
                        (
                            <MenuItem id = {id} onClick={this.login}>{users[id].name} </MenuItem>
                        )) : null}
                    </DropdownButton>
                    </Col>

                </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProp({users}){
    return {
        userIds: Object.keys(users),
        users
    }
}

export default connect(mapStateToProp)(LogIn)