import React from 'react';

import './HaikuShow.css'

function HaikuShow (props) {
  console.log(props)
  return (
    <div className='haikuCard'>
      <div className='innerHaikuCard'>
        <h2 className='haikuTitle'>{props.haiku.title}</h2>
        <p className='haikuText'>{props.haiku.line_one}</p>
        <p className='haikuText'>{props.haiku.line_two}</p>
        <p className='haikuText'>{props.haiku.line_three}</p>
        <p className='haikuCardMovie'>{props.haiku.movie}</p>
        <p className='haikuCardUser'>{props.haiku.user}</p>
      </div>
    </div>
  )
}

export default HaikuShow;