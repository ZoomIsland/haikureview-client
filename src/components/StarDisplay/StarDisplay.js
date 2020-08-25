import React from 'react';

import './StarDisplay.css'

function StarDisplay(props) {
  const starArray = [0,1,2,3,4]
  const rating = parseFloat(props.rating);
  const mappedStars = starArray.map(star => {
    if ((rating - star) >= 1) {
      return (
        <div className="star" data-name="userRating" data-value={star + 1} key={star} onClick={props.handleInputChange}>
          <div className="gold"></div>
        </div>
      )
    } else if ((rating - star) >= 0) {
      let starPercent = ((rating - star) * 100).toString() + "%";
      return (
        <div className="star" data-name="userRating" data-value={star + 1} key={star} onClick={props.handleInputChange}>
          <div className="gold" style={{width: starPercent}}></div>
        </div>
      )
    } else {
      return (
        <div className="star" data-name="userRating" data-value={star + 1} key={star} onClick={props.handleInputChange}></div>
      )
    }
  })

  return (
    <div className="starDisplay">
      {mappedStars}
    </div>
  )
}

export default StarDisplay;