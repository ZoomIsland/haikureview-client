import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css'

import MovieCard from '../MovieCard/MovieCard'

function MovieList(props) {
  const movieList = props.movies.map(movie => {
    return (
      <Link to={`/movies/${movie.id}`} key={movie.id}>
        <MovieCard key={movie.id} movie={movie} />
      </Link>
    )
  })

  return (
    <div className="movieList">
      {movieList}
    </div>
  )
}

export default MovieList;