import React from 'react';

function GameCarousel (props) {
  console.log(props)
  const haikuList = props.haikus.map(haiku => {
    return (
      <div>
        Haiku
      </div>
    )
  })

  return (
    <div>
      Game Carousel
      {haikuList}
    </div>
  )
};

export default GameCarousel;