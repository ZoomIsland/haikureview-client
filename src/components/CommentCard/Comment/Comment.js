import React, { Component } from 'react';

import StarDisplay from '../../StarDisplay/StarDisplay'

class Comment extends Component {
  dateString = () => {
    const date = new Date(parseInt(this.props.comment.post_date))
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`
  }

  render() {
    return (
      <div className="comment">
        {this.props.comment.rating !== 0 &&
          <div className="commentStars">
            <StarDisplay rating={this.props.comment.rating} />
          </div>
        }
        <div className="commentActual">
          <p>{this.props.comment.comment}</p>
          <p className="commentUser">by {this.props.comment.user.profile.display_name} on {this.dateString()}</p>
        </div>
      </div>
    )
  }
}

export default Comment;