import React from 'react';

import StarDisplay from '../../StarDisplay/StarDisplay';

function CommentInput(props) {
  return (
    <div className="commentInput">
      <div className="userStars">
        <StarDisplay rating={props.userRating} handleInputChange={props.handleInputChange} />
      </div>
      <div className="userComment">
        <label htmlFor="userComment"></label>
        <textarea
          id="userComment" 
          name="userComment" 
          placeholder="Add new comment" 
          onChange={props.handleInputChange}></textarea>
        <button onClick={props.onCommentSubmit}>Add Comment</button>
      </div>
    </div>
  )
}

export default CommentInput;