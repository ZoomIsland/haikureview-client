import React from 'react';

import StarDisplay from '../../StarDisplay/StarDisplay'

function Comment(props) {
  return (
    <div className="comment">
      {props.comment.rating !== 0 &&
        <div className="commentStars">
          <StarDisplay rating={props.comment.rating} />
        </div>
      }
      <div className="commentActual">
        <p>{props.comment.comment}</p>
        <p className="commentUser">by {props.comment.user.profile.display_name} on {props.comment.post_date}</p>
      </div>
    </div>
  )
}

export default Comment;