import React from 'react';

import StarDisplay from '../../StarDisplay/StarDisplay'

function Comment() {
  return (
    <div className="comment">
      <div className="commentStars">
        <StarDisplay rating="5" />
      </div>
      <div className="commentActual">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, lectus eu sollicitudin ornare, leo risus ultrices metus, non eleifend diam turpis eu justo. Fusce aliquet ex vitae mauris aliquam ornare id non eros. Ut vehicula laoreet diam, at convallis orci venenatis id. Nunc posuere, diam hendrerit posuere pretium, enim.</p>
        <p className="commentUser">by Commenter on Date</p>
      </div>
    </div>
  )
}

export default Comment;