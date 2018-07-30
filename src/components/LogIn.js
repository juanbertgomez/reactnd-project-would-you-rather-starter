import React, { Component } from 'react'
import { connect } from 'react-redux'
import { questionVotes, questionAnswered } from '../utils/helper'
import Question from './Question'
import { formatUser } from '../utils/helper'

class Dashboard extends Component {
    state = {
        answered: true
    }
    render() {
        const { name } = this.props

        
        console.log(this.props)
        return (
            <div>
                <div>
                    { name }
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    const user = users[authedUser]
    return {
        name: user ?
        formatUser(user).name
        : null

    }
}

export default connect(mapStateToProps)(Dashboard)