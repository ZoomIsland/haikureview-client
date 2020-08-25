import React from 'react';

import Comment from '../Comment/Comment'

function CommentList(props) {
  // const commentList = props.comments.map(comment => {
  //    return <Comment />
  // })
  return (
    <div className="commentList">
      This is the comment List
      <Comment />
      {/* {commentList} */}
    </div>
  )
}

export default CommentList;