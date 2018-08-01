import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, questionUserAnswer } from '../utils/helper';
import {Panel, Jumbotron, Button, Col, Row, ProgressBar } from 'react-bootstrap'
import { handleToggleQuestionAnswer } from '../actions/shared'

class QuestionPage extends Component {

    handleVote = (answer) => (e) => {
        e.preventDefault()
        const { dispatch, authedUser, id } = this.props

        //check what is happeing here, not updating DATA
        dispatch(handleToggleQuestionAnswer({
            qid: id,
            authedUser: authedUser,
            answer: answer
        }))

        this.setState({
            answer
        })

    }

    render () {
        const { question, answer} = this.props

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
                    <h3 >answer  : {answer}</h3>                    
                </Jumbotron>
                <Panel>
                <Panel.Body>
                    <Col xs={10} xsoffset={1}>
                        <Row>

                        
                            <h4>Option One:</h4>
                            <Button bsStyle={answer === 'optionOne' ? 'success' : 'danger'} bsSize="large" block  onClick={this.handleVote('optionOne')}>{optionOneText}</Button>
                            <br/>
                            <ProgressBar bsStyle="warning" now={optionOneVotes / questionTotalVotes * 100 } label={`${optionOneVotes} from  ${questionTotalVotes}`}/>
                        </Row>
                        <br/>
                        <Row>
                            <h4>Option Two:</h4> 
                            <Button bsStyle={answer === 'optionTwo' ? 'success' : 'danger' } bsSize="large" block onClick={this.handleVote('optionTwo')}> {optionTwoText}</Button>
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
        id,
        authedUser,
        question: question ? formatQuestion (authedUser, users[question.author], question) : null,
        answer: authedUser && users ? questionUserAnswer(authedUser, users, id) : ''
    }
}

export default connect(mapSateToProp)(QuestionPage)