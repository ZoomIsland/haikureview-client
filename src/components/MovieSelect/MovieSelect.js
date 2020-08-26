import React from 'react';

function MovieSelect(props) {
  const movieList = props.movies.map((movie, index) => {
    return <option key={index} value={JSON.stringify(movie)} data-title="test">{movie.title}</option>
  })
  return (
    <select name="movie" value={props.movieValue} onChange={props.handleInputChange}>
      <option value="null">Select a movie</option>
      {movieList}
    </select>
  )
}

export default MovieSelect;