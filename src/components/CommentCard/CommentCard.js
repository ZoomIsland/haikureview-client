import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import CommentInput from './CommentInput/CommentInput';
import CommentList from './CommentList/CommentList';
import './CommentCard.css'

function CommentCard(props) {
    return (
      <section className="commentCard flex-center">
        <div className="innerComment">
          {props.currentUser && 
            <CommentInput 
              userRating={props.userRating} 
              userComment={props.userComment}
              handleInputChange={props.handleInputChange} 
              onCommentSubmit={props.onCommentSubmit} />
          }
          {/* if props.comments */}
          <CommentList comments={props.comments} />
        </div>
      </section>
    )
}

export default withRouter(CommentCard);