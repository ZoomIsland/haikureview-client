import React from 'react';
import HaikuShow from '../HaikuShow/HaikuShow'

function HaikuCarousel (props) {
  const haikuList = props.haikus.map(haiku => {
    return <HaikuShow haiku={haiku} key={haiku.id} />
  })

  return (
    <div >
      {haikuList}
    </div>
  )
};

export default HaikuCarousel;