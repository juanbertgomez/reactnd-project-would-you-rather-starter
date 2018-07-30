import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helper'

class Question extends Component {
    render () {
        //console.log(this.props)
        const { question } = this.props
        if (question == null ){
            return <p> This question doesn't exist </p>
        }

        const {name, avatar, optionOneText, optionTwoText, questionTotalVotes,answered} = question

        return (
            <div className='card'>
                <div>
                    <h3 className='center'>{ name }</h3> 
                    <img
                        src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar'
                    />
                    <h4 className='center'># votes {questionTotalVotes}</h4> 
                    <h4 className='center'>answered: {answered}</h4>
                </div>
                <hr />
                <div className='quetion-info'>
                    <h3 >Options</h3> 
                    <ul>
                        <li>One: {optionOneText}</li>
                        <li>Two: {optionTwoText}</li>
                    </ul>
                </div>
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