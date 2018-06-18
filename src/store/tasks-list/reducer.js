const  getTasksHandler = (state) => {
    return {state};

};
const initialState = {
    tasks: [
        {
            description: 'task1',
            date: '2018-06-18',
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
export default (state = initialState, action) => {
    // const { type, payload } = action.js;
    switch(type) {
        case 'GET_TASKS':
            return state.tasks;
        // case 'REMOVE_ITEM':
        //     return removeItemHandler(state,payload);
        // case 'CHECK_ITEM':
        //     return checkItemHandler(state,payload);
        // case 'EDIT_ITEM':
        //     return editItemHandler(state,payload);
        default:
            return state;
    }
}