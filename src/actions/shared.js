import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser } from './authedUser';

const AUTHED_ID = 'sarahedo'
const TOGGLE_QUESTION_ANSWER='TOGGLE_QUESTION_ANSWER'
const SAVE_QUESTION='SAVE_QUESTION' 

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_ID))
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
            console.warn('Error in handleToggleQuestionAnswer: ', e)
            dispatch(toggleQuestionAnswer(info))
            alert('There was an error liking the tweet. Try again.')
        })
    }
}

function QuestionAnser({optionOneText, optionTwoText, author}) {
    return {
        type: SAVE_QUESTION,
        optionOneText,
        optionTwoText,
        author
    }
}

export function handleSaveQuestion(info) {
    return (dispatch) => {
        
        return saveQuestion(info)
        .then(res => dispatch(QuestionAnser(res)))
        .catch((e) => {
            console.warn('Error in handleSaveQuestion:',e)
            alert ('There was an error linking new question. Try again ')
        })
    }
}