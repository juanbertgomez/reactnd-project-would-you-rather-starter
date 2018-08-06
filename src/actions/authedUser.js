import { saveAuthedUser } from '../utils/api'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export function handleAuthedUser(info) {
    return (dispatch) => {
        return saveAuthedUser(info)
        .then(res => dispatch(setAuthedUser(res)))
        .catch((e) => {
            console.warn('Error in handleSaveQuestion:',e)
            alert ('There was an error linking new question. Try again ')
        })
    }
}