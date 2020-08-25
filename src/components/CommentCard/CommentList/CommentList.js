import React from 'react';

import Comment from '../Comment/Comment'

function CommentList(props) {
  // const commentList = props.comments.map(comment => {
  //    return <Comment />
  // })
  return (
    <div className="commentList">
      <Comment />
      <Comment />
      {/* {commentList} */}
    </div>
  )
}

export default CommentList;