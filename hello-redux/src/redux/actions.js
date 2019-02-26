import {INCREMENT, DECREMENT} from './action-types'

export const increment = number => ({type: INCREMENT, data: number})

export const decrement = number => ({type: DECREMENT, data: number})

//异步action
export const incrementAsync = number => {
    return dispatch => {
        window.setTimeout(
            () => {
                dispatch(increment(number));
            }
        ,1000)
    }
}