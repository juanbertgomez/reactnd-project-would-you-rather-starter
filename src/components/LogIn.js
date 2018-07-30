import React, { Component } from 'react'
import { connect } from 'react-redux'

class logIn extends Component {
    render () {

        const { name, avatar} = this.props

        return (
            <div>
                <p>Hello { name }</p> 
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
            </div>
        )
    }
}

function mapStateToProps({authedUser, users}) {
    return {
            name: users[authedUser].name,
            avatar: users[authedUser].avatarURL
    }
}


export default connect(mapStateToProps)(logIn)