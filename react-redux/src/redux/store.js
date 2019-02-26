import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {comments} from './reducers'
export default createStore(
    comments,
    applyMiddleware(thunk)
)