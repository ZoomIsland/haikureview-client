import React from 'react';

import Comment from '../Comment/Comment'

function CommentList(props) {
  const commentList = props.comments.map(comment => {
     return <Comment comment={comment} key={comment.id} />
  })
  return (
    <div className="commentList">
      {commentList}
    </div>
  )
}

export default CommentList;