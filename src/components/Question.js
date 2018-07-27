import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helper';

class Question extends Component {
    render () {
        console.log(this.props)
        const { question } = this.props
        if (question == null ){
            return <p> This question doesn't exist </p>
        }

        const {name, avatar} = question

        return (
            <div className='question'>
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <div className='quetion-info'>
                    <span>{name}</span>
                </div>
              { name }
            </div>
        )
    }
}

function mapSateToProps({authedUser, users, questions }, {id}) {
    const question = questions[id]
    return {
        question: question ?
        formatQuestion (authedUser, users[question.author], question, )
        : null
    }
}


export default connect(mapSateToProps)(Question)