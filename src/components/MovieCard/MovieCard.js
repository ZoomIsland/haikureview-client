import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'

function MovieCard(props) {
  return (
    <Link to='/movies/1'>
      <div className="movieCard">
        <img src={props.movie.poster} />
        <h2>{props.movie.title}</h2>
      </div>
    </Link>
  )
}

export default MovieCard;