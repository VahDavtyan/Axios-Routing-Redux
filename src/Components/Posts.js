import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../Store/actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Posts extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.getAllUsers();
    }, 1000);
  }

  UNSAFE_componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const postList = this.props.posts.map((post, id) => {
      return (
        <div className="post card" key={id}>
          <div className="card-content">
            <span className="card-title">
              <Link to={`posts/${post.body}`}>{post.title} </Link>
            </span>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
         <div >{postList}</div>
        <h4 className="center">Posts</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: bindActionCreators(getAllUsers, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

