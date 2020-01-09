import React from 'react';
import MyRedux from '../entities/myRedux.js';

export default class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: props.task,
            index: props.index,
            currentEdit: ""
        }
        MyRedux.listen("zibi", this.func1);
    }
    func1= (value)=>{
        this.setState({
            extraText: value
        });
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            task: nextProps.task,
            index: nextProps.index
        };
    }
    render() {
        let taskItemJSX = '';
        let textWithDelTagIfNeeded = (this.state.task.isDone) ? (<span><del>{this.state.task.text}</del></span>) : (<span>{this.state.task.text}</span>);

        taskItemJSX = (
            <li>
                <span>
                    <button onClick={() => { this.props.taskItemDeletedHandler(this.state.index); }}>delete</button>
                    <button onClick={() => { this.props.taskItemUpdatedHandler(this.state.index, this.state.currentEdit); }}>edit task</button>
                    <input type="text" size="10" onChange={this.onEditChange.bind(this)} />
                    {"\u00a0"}{/*this is a space in javascript */}
                    <span onClick={() => { this.props.taskItemClickedHandler(this.state.index); }}>
                        {textWithDelTagIfNeeded}
                    </span>
                    <span>
                        {this.state.extraText}
                    </span>
                </span>
            </li>);

        return taskItemJSX;
    }
    onEditChange(event) {
        this.setState({
            currentEdit: event.target.value
        });
    }
}