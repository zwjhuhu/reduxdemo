import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS} from './action-types'


export function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [action.data, ...state]
        case DELETE_COMMENT:
            return state.filter((comment,index) => index !== action.data)
        case RECEIVE_COMMENTS:
            return action.data
        default:
            return state;
    }
}