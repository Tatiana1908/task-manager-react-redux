import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';

import store from './store/index'
import TasksList from './containers/tasks-list'
import Modal from './containers/add-new-task-modal'
import ExpiredTasksModal from './containers/expired-tasks-modal'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TasksList />
          <Modal />
          <ExpiredTasksModal />
        </div>
      </Provider>
    );
  }
}

export default App;
