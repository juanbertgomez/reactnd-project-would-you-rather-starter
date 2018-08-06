import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MenuItem, DropdownButton } from 'react-bootstrap'
import { handleAuthedUser } from '../actions/authedUser'

class sigIn extends Component {
    
    handleSelect = (e) => {
        e.preventDefault()
        const {dispatch} = this.props
        const selection = e.target.id

        dispatch(handleAuthedUser({
            authedUser: selection
        }))
    }

    render () {
        const {userIds, users} = this.props
        console.log(userIds)
        return (
            <div className='card'>
                <div>
                    <h3 className='center'> Hello </h3> 
                </div>
                <div>
                    <h3 className='question-title'>Welcome to the Would you rather app</h3>
                    <h3 className='question-text'>Please Signing</h3> 
                    <DropdownButton
                    bsStyle="Primary"
                    title="SIGN IN"
                    key="1"
                    id="1"
                    >
                    {userIds.map((id) => 
                        (
                            <MenuItem id = {id}>{users[id].name} </MenuItem>
                        ))}
                    </DropdownButton>
                </div>
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