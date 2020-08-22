import React from 'react';
import './MovieCard.css'

function MovieCard(props) {
  return (
      <div className="movieCard">
        <img src={props.movie.poster} />
        <h2>{props.movie.title}</h2>
      </div>
  )
}

export default MovieCard;