import React from 'react';
import MyRedux from '../entities/myRedux.js';

export default class TaskInput extends React.Component {
    extraText = "";
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
                <button onClick={()=>{MyRedux.update("zibi", this.extraText);}}>call wow in task item</button>
                <input type="text" onChange={this.extraInputChangedHandler}></input>
            </div>
        );
    }
    extraInputChangedHandler = (event)=>{
        this.extraText = event.target.value;
    }
}