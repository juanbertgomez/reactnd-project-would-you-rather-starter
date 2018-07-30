import React, { Component } from 'react'
import { connect } from 'react-redux'
import { questionVotes, questionAnswered } from '../utils/helper'
import Question from './Question'

class Dashboard extends Component {
    state = {
        answered: true
    }
    render() {
        
        return (
            <div>
                <h3 className='center'> Questions</h3>
                <ul className='dashboard-list'>
                    {this.props.questionIds.map((id) => 
                        (
                            <li key={id}>
                                <Question id = {id}/>
                            </li>
                        ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions }) {
    return {
        questionIds: Object.keys(questions)
        .filter((id) => questionAnswered(authedUser, questions[id])===true )
        .sort((a,b) => questionVotes(questions[b]).length - questionVotes(questions[a]).length )
    }
}

export default connect(mapStateToProps)(Dashboard)