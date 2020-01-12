import React from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: props.tasks,
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            tasks: nextProps.tasks,
        };
    }
    render() {
        let listItemsArr = this.state.tasks.map((task, index) => (
            <TaskItem
                task={task}
                key={index}
                index={index}
                taskItemClickedHandler={this.props.taskItemClickedHandler}
                taskItemDeletedHandler={this.props.taskItemDeletedHandler}
                taskItemUpdatedHandler={this.props.taskItemUpdatedHandler} />
        ));
        return <div><ul>{listItemsArr}</ul></div>;
    }
}