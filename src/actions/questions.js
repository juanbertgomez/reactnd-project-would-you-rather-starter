import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS='RECEIVE_QUESTIONS'
export const TOGGLE_QUESTION_ANSWER='TOGGLE_QUESTION_ANSWER'


export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function toggleQuestionAnswer({id, hasVotedOne, hasVotedTwo, authedUser}) {
    return {
        type: TOGGLE_QUESTION_ANSWER,
        id, 
        hasVotedOne,
        hasVotedTwo,
        authedUser
    }
}

export function handleToggleQuestionAnswer(info) {
    return (dispatch) => {
        dispatch(toggleQuestionAnswer(info))

        return saveQuestionAnswer(info)
        .catch((e) => {
            console.warn('Error in handleToggleQuestionAnswer: ', e)
            dispatch(toggleQuestionAnswer(info))
            alert('There was an error liking the tweet. Try again.')
        })
    }
}
