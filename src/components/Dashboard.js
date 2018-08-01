import React, { Component } from 'react'
import { connect } from 'react-redux'
import { questionVotes, questionAnswered } from '../utils/helper'
import Question from './Question'
import { Grid, Col, Row, Nav, NavItem} from 'react-bootstrap'

class Dashboard extends Component {
    state = {
        answered: true
    }

    handleSelect(selectedKey) {
        alert(`selected ${selectedKey}`)
      }

    render() {
        
        return (
            <Grid>
                <Col xs={8} md={8} xsoffset={2}>
                    <Row>
                        <Col xs={8} md={8} xsoffset={2}>
                            <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect} xsoffset={4}>
                                <NavItem eventKey={1}>
                                    Un Answered
                                </NavItem>
                                <NavItem eventKey={2} >
                                    Answered
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                    <Col className='question-list'>
                        {this.props.questionIds.map((id) => 
                            (
                                <Col className='question' key={id}> 
                                    <Question id = {id}/>
                                </Col>
                            ))}
                    </Col>
                </Col>
            </Grid>
        )
    }
}

function mapStateToProps({ authedUser, questions }) {
    return {
        questionIds: Object.keys(questions)
        .filter((id) => questionAnswered(authedUser, questions[id])===false )
        .sort((a,b) => questionVotes(questions[b]).length - questionVotes(questions[a]).length )
    }
}

export default connect(mapStateToProps)(Dashboard)