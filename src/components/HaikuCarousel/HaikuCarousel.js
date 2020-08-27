import React from 'react';
import HaikuShow from '../HaikuShow/HaikuShow'

function HaikuCarousel (props) {
  const haikuList = props.haikus.map(haiku => {
    return <HaikuShow 
      haiku={haiku} 
      key={haiku.id} 
      currentUser={props.currentUser} />
  })
  const noHaiku = {
    title: "There's nothing here",
    line_one: "No haikus were found",
    line_two: "Which can only mean one thing:",
    line_three: "You should write one",
    user: {id: 0},
    id: 0
  }
  return (
    <div>
      {props.haikus.length ? haikuList: <HaikuShow haiku={noHaiku} />}
    </div>
  )
};

export default HaikuCarousel;