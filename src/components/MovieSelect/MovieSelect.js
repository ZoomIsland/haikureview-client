import React from 'react';

function MovieSelect(props) {
  const movieList = props.movies.map(movie => {
    return <option value={movie.id}>{movie.title}</option>
  })
  return (
    <select>
      <option value="0">Select a movie</option>
      {movieList}
    </select>
  )
}

export default MovieSelect;