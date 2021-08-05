import {
    GET_MESSAGES,
    SUCCESS_GETTING_MSGS,
    ERROR_GETTING_MSGS,
    SENDING_MSG,
    ERROR_SENDING_MSG,
    SUCCESS_SENDING_MSG
} from './actionTypes'


const initialState = {
    msgs: [],
    loading: true,
    error: '',
    sendingMsg: false
}

export const msgsReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case GET_MESSAGES:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case SUCCESS_GETTING_MSGS:
            return {
                ...state,
                loading: false,
                msgs: payload,
                error: '',
            }
        case ERROR_GETTING_MSGS:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case SENDING_MSG:
            return {
                ...state,
                sendingMsg: true,
                error: ''
            }
        case ERROR_SENDING_MSG:
            return {
                ...state,
                sendingMsg: false,
                error: payload
            }
        case SUCCESS_SENDING_MSG:
            return {
                ...state,
                msgs: [...state.msgs.slice(0, 14), payload],
                sendingMsg: false,
                error: ''
            }
        default:
            return state
    }
}
