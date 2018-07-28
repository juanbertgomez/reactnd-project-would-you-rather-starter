import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helper';

class QuestionPage extends Component {
    render () {
        const { question } = this.props
        if (question == null ){
            return <p> This question doesn't exist </p>
        }

        const {name, avatar, optionOneText, optionOneVotes, optionTwoText, optionTwoVotes, questionTotalVotes, answered} = question 

        return(
            <div className='question'>
                <div>
                    <h3 className='center'>Question asqued by { name }</h3> 
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
                        <ul className='question'>
                            <li>One: {optionOneText}</li>
                            <li>{optionOneVotes} from  {questionTotalVotes}</li>
                        </ul>
                        <ul className='question'>
                            <li>Two: {optionTwoText}</li>
                            <li>{optionTwoVotes} from  {questionTotalVotes}</li>
                        </ul>
                    </ul>
                </div>
            </div>
        )
    }
}

function mapSateToProp({authedUser, users, questions}, props) {
    const { id } = props.match.params
    const question = questions[id]
    return {
        question: question ?
        formatQuestion (authedUser, users[question.author], question)
        : null
    }
}

export default connect(mapSateToProp)(QuestionPage)