import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helper'
import {Jumbotron, Row } from 'react-bootstrap'

class Question extends Component {
    render () {
        //console.log(this.props)
        const { question } = this.props
        if (question == null ){
            return <p> This question doesn't exist </p>
        }

        const {id, name, avatar, optionOneText, optionTwoText} = question

        return (
            <Row className='question'>
                <Link to={`/questions/${id}`}> 
                    <Jumbotron>
                        <img align = 'right'
                        src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar'
                        />
                        <h3 >{ name }</h3>
                        <p>One: {optionOneText}</p>
                        <p>Two: {optionTwoText}</p>
                    </Jumbotron>
                </Link>
            </Row>
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