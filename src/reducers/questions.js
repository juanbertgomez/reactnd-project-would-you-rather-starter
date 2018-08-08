import {
    RECEIVE_QUESTIONS
} from '../actions/questions'

import {
    SAVE_QUESTION,
    TOGGLE_QUESTION_ANSWER
} from '../actions/shared'

export default function questions (state ={}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case TOGGLE_QUESTION_ANSWER:
            return{
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }

        default:
            return state
    }
}