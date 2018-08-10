import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MenuItem, DropdownButton, Col, Row } from 'react-bootstrap'
import { handleAuthedUser } from '../actions/authedUser'

class sigIn extends Component {
    
    handleChange = (e) => {
        e.preventDefault()
        const user = e.target.id
        //TODO: update/write the authed user
        this.props.dispatch(handleAuthedUser(user))
    }

    render () {
        const {userIds, users} = this.props
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
                    className='center'
                    bsStyle="primary"
                    title="SIGN IN"
                    key="1"
                    id="1"
                    >
                    {userIds.map((id) => 
                        (
                            <MenuItem id = {id} onClick={this.handleChange}>{users[id].name} </MenuItem>
                        ))}
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

export default connect(mapStateToProp)(sigIn)