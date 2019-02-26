import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {counter} from './reducers'

const store = createStore(
    counter,
    applyMiddleware(thunk)
) //内部会第一次调用recuder函数得到初始state值

export default store