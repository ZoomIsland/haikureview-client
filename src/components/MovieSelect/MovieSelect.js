import React from 'react';

function MovieSelect(props) {
  const moviesSansHaiku = [];
  for (let i = 0; i < props.movies.length; i++) {
    const currMovie = props.movies[i];
    if (currMovie.haikus) {
      currMovie.haikus = [];
    }
    moviesSansHaiku.push(currMovie);
  }
  const movieList = moviesSansHaiku.map((movie, index) => {
    return <option key={index} value={JSON.stringify(movie)}>{movie.title}</option>
  })
  return (
    <select name="movie" value={props.movieValue} onChange={props.handleInputChange}>
      <option value="null">Select a movie</option>
      {movieList}
    </select>
  )
}

export default MovieSelect;