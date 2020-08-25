import React from 'react';

import './StarDisplay.css'

function StarDisplay(props) {
  const starArray = [1,2,3,4,5]
  const mappedStars = starArray.map(star => {
    if ((props.rating - star) >= 1) {
      return (
        <div className="star">
          <div className="gold"></div>
        </div>
      )
    } else if ((props.rating - star) >= 0) {
      let starPercent = ((props.rating - star) * 100).toString() + "%"
      console.log(starPercent)
      return (
        <div className="star">
          <div className="gold" style={{width: starPercent}}></div>
        </div>
      )
    } else {
      return (
        <div className="star"></div>
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