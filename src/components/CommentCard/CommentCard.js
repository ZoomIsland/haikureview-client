import React from 'react';

import CommentInput from './CommentInput/CommentInput';
import CommentList from './CommentList/CommentList';
import './CommentCard.css'

function CommentCard() {
  return (
    <section className="commentCard flex-center">
      <div className="innerComment">
        <CommentInput />
        <CommentList />
      </div>
    </section>
  )
}

export default CommentCard;