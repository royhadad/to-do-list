import React from 'react';
import './App.css';

import TaskList from './components/TaskList';
import TaskInput from './components/TasksInput';
import Task from './entities/Task';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [new Task('bjj'), new Task('basketball'), new Task('football')],
      newTask: ''
    }
  }
  render() {
    return (
      <div className="app">
        <TaskInput
          inputChangedHandler={this.inputChangedHandler.bind(this)}
          taskAddedHandler={this.taskAddedHandler.bind(this)} />
        <TaskList tasks={this.state.tasks}
          taskItemClickedHandler={this.taskItemClickedHandler.bind(this)}
          taskItemDeletedHandler={this.taskItemDeletedHandler.bind(this)}
          taskItemUpdatedHandler={this.taskItemUpdatedHandler.bind(this)} />
      </div>
    );
  }
  taskItemClickedHandler(itemIndex) {
    const tasks = this.state.tasks;
    let newTask = tasks[itemIndex].clone();
    newTask.toggleIsDone();
    this.setState({
      tasks: tasks.slice(0, itemIndex).concat(newTask).concat(tasks.slice(itemIndex + 1))
    });
  }
  taskItemDeletedHandler(itemIndex) {
    const tasks = this.state.tasks;
    this.setState({
      tasks: tasks.slice(0, itemIndex).concat(tasks.slice(itemIndex + 1))
    });
  }
  inputChangedHandler(event) {
    this.setState({
      newTask: event.target.value
    });
  }
  taskAddedHandler() {
    if (this.state.newTask) {
      this.setState({
        tasks: this.state.tasks.concat([new Task(this.state.newTask)])
      });
    }
  }
  taskItemUpdatedHandler(itemIndex, text) {
    if (text) {
      const tasks = this.state.tasks;
      let newTask = tasks[itemIndex].clone();
      newTask.text = text;
      this.setState({
        tasks: tasks.slice(0, itemIndex).concat(newTask).concat(tasks.slice(itemIndex + 1))
      });
    }
  }
}