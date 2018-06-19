import React, { Component } from 'react'


export default class ExpiredTasksModal extends Component{
  
    state = {
        currentDisplayedExpiredTask: 0,
        expiredTasks: []
    }

    componentWillReceiveProps(nextProps) {
        const expiredTasksList = nextProps.tasksList.filter( task => task.expired)
        this.setState({expiredTasks: expiredTasksList})
    }

    onClickToRemoveBtn = (e) => {
        e.preventDefault()
        if (this.state.currentDisplayedExpiredTask > 0) {
            this.setState({ currentDisplayedExpiredTask: this.state.currentDisplayedExpiredTask - 1 })
        } else {
            this.setState({ currentDisplayedExpiredTask: 0 })
        }
        this.props.removeTask(this.state.expiredTasks[this.state.currentDisplayedExpiredTask].id)
    }

    getPrevExpiredTask = (e) => {
        e.preventDefault()
        if (this.state.currentDisplayedExpiredTask > 0) {
            this.setState({ currentDisplayedExpiredTask: this.state.currentDisplayedExpiredTask - 1 })
        }
    }

    getNextExpiredTask = (e) => {
        e.preventDefault()
        if (this.state.currentDisplayedExpiredTask < this.state.expiredTasks.length - 1) {
            this.setState({ currentDisplayedExpiredTask: this.state.currentDisplayedExpiredTask + 1 })
        }
    }
    
    render() {
        const expiredTasksList = this.state.expiredTasks
        const indexOfCurrentTask = this.state.currentDisplayedExpiredTask
        const prevBtnClass = !indexOfCurrentTask ? 'prev hidden' : 'prev'
        const nextBtnClass = (indexOfCurrentTask === expiredTasksList.length - 1) ? 'next hidden' : 'next'
       

        return(
        <div>
            {expiredTasksList && expiredTasksList.length ?
            <div className="expired-tasks-overlay">
                <div className="expired-tasks-modal">
                <span className="number">{indexOfCurrentTask + 1}</span>
                <h2 className="warning-text">Task {expiredTasksList[indexOfCurrentTask].description} expired!</h2>
                <button className="btn-default" onClick={this.onClickToRemoveBtn}>Remove</button>
                <button className={prevBtnClass} onClick={this.getPrevExpiredTask}>&#8249;</button>
                <button className={nextBtnClass} onClick={this.getNextExpiredTask}>&#8250;</button>
                </div>
            </div>
            : null
            }
      </div>
        )
    }
}