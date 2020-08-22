import React from 'react';
import './MovieDetail.css'

function MovieDetail(props) {
  return (
    <div className="movieDetail">
      <img src={props.movie.poster} />
      <h2>{props.movie.title}</h2>
    </div>
  )
}

export default MovieDetail;