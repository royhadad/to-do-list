import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, createPost } from '../actions/postActions.js';
import PropTypes from 'prop-types';

class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.inputChangedHandler = props.inputChangedHandler;
        this.taskAddedHandler = props.taskAddedHandler;
    }
    render() {
        let singleItem = "";
        if (typeof this.props.singlePost === 'string')
            singleItem = [<span key={"0"}>{this.props.singlePost}</span>];
        return (
            <div>
                <input type="text" onChange={this.inputChangedHandler} />
                <button onClick={this.taskAddedHandler}>add task</button>
                {singleItem}
            </div>
        );
    }
}

TaskInput.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    createPost: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    posts: state.posts.items,
    singlePost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts, createPost })(TaskInput);