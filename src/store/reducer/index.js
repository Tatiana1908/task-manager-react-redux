
const initialState = {
    tasks: [
        {
            description: 'task1',
            date: '2018-06-19',
            expired: false,
            id: 1,
        },
        {
            description: 'task2',
            date: '2018-06-14',
            expired: false,
            id: 2,
        },
        {
            description: 'task3',
            date: '2018-06-14',
            expired: false,
            id: 3,
        },
        {
            description: 'task4',
            date: '2018-06-14',
            expired: false,
            id: 4,
        },
    ]

}
const updateExpiredStatusHandler = (state, id) =>{
    let newTaskList = state.tasks.map(task => {
        if (task.id === id){
            return {...task, expired: true}
        }
        return task
    })
    return {...state, tasks: newTaskList}
}

export default (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case 'getTasks':
            return state;
        case 'addNewTask':
            return {...state,
                tasks: [ ...state.tasks, payload]};
        case 'removeTask':
            return {...state,
                tasks: [ ...state.tasks.filter(task => task.id !== payload)]};
        case 'updateExpiredStatus':
            return updateExpiredStatusHandler(state, payload)

        default:
            return state;
    }
}