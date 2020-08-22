import React from 'react';
import './MovieList.css'

import MovieCard from '../MovieCard/MovieCard'

function MovieList(props) {
  const movieList = props.movies.map(movie => {
    return (
      <MovieCard key={movie.id} movie={movie} />
    )
  })

  return (
    <div className="movieList">
      {movieList}
    </div>
  )
}

export default MovieList;