import {
    CREATE_USER_PENDING,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILED
} from '../types'

const initialState = {
    users: [],
    error: null,
    loading: false,
    user: {},
}

export default function(state = initialState, action) {
    switch (action.type) {
        case CREATE_USER_PENDING:
            return {
                ...state,
                loading: true,
                users: [],
                user: {}
            }
        case CREATE_USER_SUCCESS: 
            return {
                ...state,
                loading: false,
                users: action.payload,
                user: {}
            }
        case CREATE_USER_FAILED: 
            return {
                ...state,
                users: [],
                error: true,
                loading: false,
                user: {}
            }

            default:
                return state;
    }
}