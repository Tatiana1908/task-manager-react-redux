import { createAction } from 'redux-actions'

export const getTasks = createAction('getTasks')

export const addNewTask = (newTask) => createAction({
    type: 'addNewTask',
    payload: newTask
})

// export const addTask = createAction('addTask')