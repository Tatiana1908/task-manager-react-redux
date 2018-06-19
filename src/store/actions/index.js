import { createAction } from 'redux-actions'

export const getTasks = createAction('getTasks')

export const addNewTask = createAction('addNewTask')

export const removeTask = createAction('removeTask')

export const updateExpiredStatus = createAction('updateExpiredStatus')