import React, { Component } from 'react'
import { formatUser } from '../utils/helper'
import { connect } from 'react-redux'


class User extends Component {
    render () {
        //console.log(this.props)
        const { user } = this.props
        if (user == null ){
            return <p> This user doesn't exist </p>
        }

        const {name, avatar, answeredQuestions, userQuestions, totalPoints} = user

        return (
            <div className='user'>
                <div>
                    <h3 className='center'>{ name }</h3> 
                    <img
                        src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar'
                    />
                </div>
                <hr />
                <div className='quetion-info'>
                    <h3 >Points: { totalPoints }</h3> 
                    <ul>
                        <li>Questions Answered: { answeredQuestions }</li>
                        <li>Created Questions: { userQuestions }</li>
                    </ul>
                </div>
            </div>
        )
    }
}

function mapSateteToProps({users}, {id}) {
    const user = users[id]

    return {
        user: user ?
        formatUser(user)
        : null
    }
}
export default connect(mapSateteToProps)(User)