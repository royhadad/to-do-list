import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import { fetchPosts, createPost } from '../actions/postActions.js';
import PropTypes from 'prop-types';

class TaskList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    constructor(props) {
        super(props);
        this.state = {
            tasks: props.tasks,
        };
        this.addPostHandler = this.addPostHandler.bind(this);
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            tasks: nextProps.tasks,
        };
    }
    addPostHandler() {
        this.props.createPost();
    }
    render() {
        let singleItem = "";
        if(typeof this.props.singlePost === 'string')
            singleItem = [<span key={"0"}>{this.props.singlePost}</span>];
        const postItems = this.props.posts.map(post => (
            <div key={post}>
                <h3>{post}</h3>
            </div>
        ));
        let listItemsArr = this.state.tasks.map((task, index) => (
            <TaskItem
                task={task}
                key={index}
                index={index}
                taskItemClickedHandler={this.props.taskItemClickedHandler}
                taskItemDeletedHandler={this.props.taskItemDeletedHandler}
                taskItemUpdatedHandler={this.props.taskItemUpdatedHandler} />
        ));
        return (<div><ul>{listItemsArr}</ul>
            {postItems}
            <button onClick={this.addPostHandler}> add post!</button>
            {singleItem}
        </div>);
    }
}

TaskList.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    createPost: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    posts: state.posts.items,
    singlePost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts, createPost })(TaskList);