import { combineReducers } from 'redux'
import authedUsers from './authedUsers'
import questions from './questions'
import users from './users'

export default combineReducers({
    authedUsers,
    questions,
    users
})