import React, { Component } from 'react'
import Task from '../task'

export default class TasksList extends Component {
    componentWillMount() {
        this.props.getTasks()
    }

    render() {
        if (this.props.tasksList.length === 0) {
            return <h2>Now any tasks</h2>
        }

        return (
            <div className='tasks-wrapper'>
                {this.props.tasksList.map(task => <Task taskItem={task} key={task.id}/> )}
            </div>
        )
    }
}
