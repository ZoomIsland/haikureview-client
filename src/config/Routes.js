import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MovieSearch from '../containers/MovieSearch/MovieSearch'
import ProfilePage from '../containers/ProfilePage/ProfilePage'

function Routes(props) {
  const { currentUser, onMovieClick, onProfileMovieClick } = props;
  return (
    <Switch>
      <Route 
        path='/profiles/:id' 
        render={(props) => <ProfilePage {...props} onProfileMovieClick={onProfileMovieClick} currentUser={currentUser} />} />
      <Route 
        path='/movies/' 
        render={(props) => <MovieSearch {...props} onMovieClick={onMovieClick} searchPlaceholder="Search for haikus by movie" />} />
    </Switch>
  )
}

export default Routes;