import React from 'react';
import './MovieCard.css'

function MovieCard(props) {
  return (
      <div className="movieCard flex-center" onClick={() => {props.onMovieClick(props.movie.id)}}>
        <img alt={props.movie.title} src={props.movie.poster} />
        <div className="titleHolder flex-center">
          <p>{props.movie.title}</p>
        </div>
      </div>
  )
}

export default MovieCard;