import React from 'react';
import { Link } from 'react-router-dom';

import './HaikuShow.css'

function HaikuShow (props) {
  console.log(props)
  return (
    <div className='haikuCard flex-center'>
      <div className='innerHaikuCard'>
        <Link to={`/haikus/${props.haiku.id}`}>
          <h2 className='haikuTitle'>{props.haiku.title}</h2>
        </Link>
        <p className='haikuText'>{props.haiku.line_one}</p>
        <p className='haikuText'>{props.haiku.line_two}</p>
        <p className='haikuText'>{props.haiku.line_three}</p>
        {/* Add below back in once related works */}
        <Link to ={`/movies/${props.haiku.movie.id}`}><p className='haikuCardMovie'>{props.haiku.movie.title}</p></Link>
        {/* <p className='haikuCardUser'>{props.haiku.user.display_name}</p> */}
      </div>
    </div>
  )
}

export default HaikuShow;