import React, { Component } from 'react'
import { connect } from 'react-redux'
import { questionAnswered } from '../utils/helper'
import Question from './Question'
import { Grid, Col, Row, Nav, NavItem} from 'react-bootstrap'

class Dashboard extends Component {
    state = {
        answered: false
    }

    handleSelect = (e) => {
        const selection = e.target.text 
        e.preventDefault()
        this.setState({
            answered: selection === 'Answered' ? true : false
        })
    }

    render() {
        const {answered} = this.state 
        //console.log(answered)
        return (
            <Grid>
                <Col xs={8} md={8} xsoffset={2}>
                    <Row>
                        <Col xs={8} md={8} xsoffset={2}>
                            <Nav bsStyle="pills" xsoffset={4} activeKey={answered ? 2 : 1} onClick={this.handleSelect } text='false'>
                                <NavItem eventKey={1}>
                                    Un Answered
                                </NavItem>
                                <NavItem eventKey={2} onClick={this.handleSelect} >
                                    Answered
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                    <Col className='question-list'>
                        {this.props.questionList
                            .filter(function (question)  {return question.answered === answered})
                            .map((question) => 
                            (
                                <Col className='question' key={question.id}> 
                                    <Question id = {question.id} />
                                </Col>
                            ))}
                    </Col>
                </Col>
            </Grid>
        )
    }
}

function mapStateToProps({ authedUser, questions }) {
    const questionIds = questions ? Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp )
    : null

    const questionList = []
        questionIds.map((id) => 
            questionList.push({id: id , answered: questionAnswered(authedUser, questions[id])})
        )
    
        return {questionList: questions  ? questionList : null}
 
    }

export default connect(mapStateToProps)(Dashboard)