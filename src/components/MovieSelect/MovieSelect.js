import React from 'react';

function MovieSelect(props) {
  const movieList = props.movies.map(movie => {
    return <option key={movie.id} value={movie.id}>{movie.title}</option>
  })
  return (
    <select name="movie" onChange={props.handleInputChange}>
      <option value="0">Select a movie</option>
      {movieList}
    </select>
  )
}

export default MovieSelect;