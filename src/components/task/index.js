import React, { Component } from 'react'


export default class Task extends Component {

  runTimer() {
    let {date, id} = this.props.taskItem
    const msInHour = 3600000
    const msInMinute = 60000
    const msInSecond = 1000
    this.time = Date.parse(date)
    let interval

    function handleOnTimeOver() {
      clearInterval(interval)
    }

    interval = setInterval(() => {
      if (!this.timerElement) return clearInterval(interval)
     
      if (((this.time - Date.now()) > 0)) {
        const hours = (this.time - Date.now()) / msInHour
        const minutes = ((this.time - Date.now()) % msInHour) / msInMinute
        const seconds = (((this.time - Date.now()) % msInHour) % msInMinute) / msInSecond
        this.timerElement.innerHTML = `${parseInt(hours, 10)} : ${parseInt(minutes, 10)} : ${parseInt(seconds, 10)}`

        return true
      }
      if (this.props.taskItem.expired) return null

      this.props.updateExpiredStatus(id)
      handleOnTimeOver()
      this.timerElement.innerHTML = '00 : 00 : 00'

      return true
    }, 1000)
  }
  onRemoveHandler = (e) => {
    e.preventDefault()
    this.props.removeTask(this.props.taskItem.id)
  }

  render() {
    const { description, id } = this.props.taskItem

    return (
      <li className="task-item" id={id}>
        {description &&
        <div className="task-item-content">
          <span className="task-desc">{description}</span>
          <span className="time" ref={node => (this.timerElement = node)}>wait{this.runTimer()}</span>
          <button className="remove-item-btn" onClick={this.onRemoveHandler} >+</button>
        </div>
        }
      </li>
    )
  }
}
