import { getAuthedUser } from '../utils/api'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser (user) {
    return {
        type: SET_AUTHED_USER,
        user
    }
}

export function handleAuthedUser(id) {
    return (dispatch) => {
        return getAuthedUser()
        .then((users) => {
            const auth = Object.keys(users).filter(user => user === id)
            auth.length === 0 ?
            dispatch(setAuthedUser(null)):
            dispatch(setAuthedUser(id))
        })
    }
}