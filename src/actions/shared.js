import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser } from './authedUser';

export const TOGGLE_QUESTION_ANSWER='TOGGLE_QUESTION_ANSWER'
export const SAVE_QUESTION='SAVE_QUESTION' 

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
        .then(({users, questions, user}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}

function addQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function handleSaveQuestion(info) {
    return (dispatch) => {
        
        return saveQuestion(info)
        .then(question => dispatch(addQuestion(question)))
        .catch((e) => {
            console.warn('Error in handleSaveQuestion:',e)
            alert ('There was an error linking new question. Try again ')
        })
    }
}

function toggleQuestionAnswer({qid, authedUser, answer}) {
    return {
        type: TOGGLE_QUESTION_ANSWER,
        qid,
        authedUser,
        answer
    }
}

export function handleToggleQuestionAnswer(info) {
    return (dispatch) => {
        dispatch(toggleQuestionAnswer(info))
        return saveQuestionAnswer(info)
        .catch((e) => {
            console.warn('Error in handleToggleQuestionAnswer:',e)
            alert ('There was an error linking answer. Try again ')
        })
    }
}




