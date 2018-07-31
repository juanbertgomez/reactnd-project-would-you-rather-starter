import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helper';
import {Panel, Jumbotron, Button, Col, Row, ProgressBar } from 'react-bootstrap'
import { handleToggleQuestionAnswer } from '../actions/questions'

class QuestionPage extends Component {

    handleVote = (e) => {
        e.preventDefault()
        const answer =e.target.value
        const { dispatch, question, authedUser } = this.props
        dispatch(handleToggleQuestionAnswer({
            qid: question.id,
            authedUser: authedUser,
            answer: answer
        }))

    }

    render () {
        const { question } = this.props

        if (question == null ){
            return <p> This question doesn't exist </p>
        }

        const {name, avatar, optionOneText, optionOneVotes, hasVotedOne, optionTwoText, optionTwoVotes, hasVotedTwo, questionTotalVotes, answered} = question 

        return(
            <Col xs={8} md={8} xsOffset={2}>
                <br/>
                <Jumbotron>
                    <img align = 'right'
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                    />
                    <h4 >Asqued by { name }</h4>
                    <h3 >Would you rather?</h3>                    
                </Jumbotron>
                <Panel>
                <Panel.Body>
                    <Col xs={10} xsOffset={1}>
                        <Row>

                        
                            <h4>Option One:</h4>
                            <Button bsStyle={hasVotedOne ? 'success' : 'danger'} bsSize="large" block  onClick={this.handleVote} value='optionOne'>{optionOneText}</Button>
                            <br/>
                            <ProgressBar bsStyle="warning" now={optionOneVotes / questionTotalVotes * 100 } label={`${optionOneVotes} from  ${questionTotalVotes}`}/>
                        </Row>
                        <br/>
                        <Row>
                            <h4>Option Two:</h4> 
                            <Button bsStyle={hasVotedTwo ? 'success' : 'danger' } bsSize="large" block onClick={this.handleVote} value='optionTwo'> {optionTwoText}</Button>
                            <br/>
                            <ProgressBar bsStyle="warning" now={optionTwoVotes / questionTotalVotes * 100} label={`${optionTwoVotes} from  ${questionTotalVotes}`}/>
                        </Row>
                    </Col>
                </Panel.Body>
                </Panel>
            </Col>
        )
    }
}

function mapSateToProp({authedUser, users, questions}, props) {
    const { id } = props.match.params
    const question = questions[id]
    return {
        authedUser,
        question: question ?
        formatQuestion (authedUser, users[question.author], question)
        : null
    }
}

export default connect(mapSateToProp)(QuestionPage)