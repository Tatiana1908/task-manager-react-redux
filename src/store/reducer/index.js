
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

export default (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case 'getTasks':
            return state;
        case 'addNewTask':
            return [...state.tasks, payload];
        default:
            return state;
    }
}