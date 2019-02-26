import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETE, RECEIVE_TODOS} from './mutation-types'

export default {
    addTodo ({commit},todo) {
        commit(ADD_TODO,todo);
    },
    deleteTodo ({commit}, index) {
        commit(DELETE_TODO,index)
    },
    selectAllTodos ({commit}, check) {
        commit(SELECT_ALL_TODOS,check)
    },
    clearAllCompleted({commit}) {
        commit(CLEAR_ALL_COMPLETE)
    },
    reTodos({commit}) {
        window.setTimeout(
            () => {
                const todos = [];
                for(let i=0;i<10;i++){
                    todos[i] = {title:'test_' + i,complete: false}
                }
                commit(RECEIVE_TODOS,todos);
            }
        ,1000);
    }
}