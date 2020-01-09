import React from 'react';

export default class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.inputChangedHandler = props.inputChangedHandler;
        this.taskAddedHandler = props.taskAddedHandler;
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.inputChangedHandler} />
                <button onClick={this.taskAddedHandler}>add task</button>

            </div>
        );
    }
}