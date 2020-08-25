import React from 'react';

import CommentInput from './CommentInput/CommentInput';
import CommentList from './CommentList/CommentList';
import './CommentCard.css'

function CommentCard(props) {
  return (
    <section className="commentCard flex-center">
      <div className="innerComment">
        {/* if currentUser */}
        <CommentInput />
        {/* if props.comments */}
        <CommentList />
      </div>
    </section>
  )
}

export default CommentCard;