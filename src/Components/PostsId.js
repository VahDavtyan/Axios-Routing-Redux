import React, { Component } from 'react';

class PostsId extends Component {
  render() {
    return (
      <div>
        <div className="post card">
          <div className="card-content">
            <span className="card-title">
              <div className="container">{this.props.match.params.id}</div>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default PostsId;
