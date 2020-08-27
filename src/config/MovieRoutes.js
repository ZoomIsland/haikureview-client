import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MovieList from '../components/MovieList/MovieList';
import MovieSelect from '../components/MovieSelect/MovieSelect'

function MovieRoutes(props) {
  const { movies, onMovieClick, handleInputChange, movie } = props;
  return (
    <Switch>
      <Route 
        path='/newhaiku/' 
        render={(props) => <MovieSelect {...props} 
          movies={movies}
          handleInputChange={handleInputChange}
          movie={movie} />} />
      <Route 
        path='/movies/' 
        render={(props) => <MovieList {...props} 
          movies={movies} 
          onMovieClick={onMovieClick} />} />
    </Switch>
  )
}

export default MovieRoutes;