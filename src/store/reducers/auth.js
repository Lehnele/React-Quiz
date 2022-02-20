import {AUTH_ERROR, AUTH_LOGOUT, AUTH_SUCCESS} from '../actions/actionTypes';

const initialState = {
    token: null,
    authError: false
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                authError: false
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                authError: false
            }
        case AUTH_ERROR:
            console.log('Nu da...')
            return {
                ...state,
                authError: true
            }
        default:
            return state
    }
}