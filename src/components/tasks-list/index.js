import React, { Component } from 'react'

import Todo from '../../containers/tasks-list'

export default class TasksList extends Component {
    componentDidMount() {
        this.props.getTasks()
    }

    render() {
        if (this.props.tasks.length === 0) {
            return <h2>Now any tasks</h2>
        }

        return (
            <div className='tasks-wrapper'>
                {this.props.tasksList.map(task => console.log(task) )}
            </div>
        )
    }
}
