import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions.js';
import PropTypes from 'prop-types';

class TaskList extends React.Component {
    componentDidMount (){
        this.props.fetchPosts();
    }
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
        const postItems = this.props.posts.map(post=>(
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
        return <div><ul>{listItemsArr}</ul>{postItems}</div>;
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(TaskList);