import React from 'react';

import oneOrMoreHaikus from './oneOrMoreHaikus';
import './MovieCard.css';

function MovieCard(props) {

  return (
      <div className="movieCard" onClick={() => {props.onMovieClick(props.movie.id)}}>
        <img alt={props.movie.title || props.movie.Title} src={props.movie.poster || props.movie.Poster} />
        <div className="titleHolder flex-center-column">
          <p>{props.movie.title || props.movie.Title}</p>
          <hr />
          {props.movie.haikus && 
            <p className="movieHaikus">{props.movie.haikus.length} {oneOrMoreHaikus(props.movie.haikus.length)}</p>
          }
          {!props.movie.haikus && 
            <p className="movieHaikus">No Haikus</p>
          }
        </div>
      </div>
  )
}

export default MovieCard;