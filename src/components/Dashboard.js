import React, { Component } from 'react'
import { connect } from 'react-redux'
import { voteCounter } from '../utils/helper'
import Question from './Question'

class Dashboard extends Component {
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

function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions).sort((a,b) => voteCounter(questions[b]) - voteCounter(questions[a]) )
    }
}

export default connect(mapStateToProps)(Dashboard)