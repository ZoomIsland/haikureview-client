import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainHub from '../containers/MainHub/MainHub'
import MovieSearch from '../containers/MovieSearch/MovieSearch'
import MovieShow from '../containers/MovieShow/MovieShow'
import NewHaiku from '../containers/NewHaiku/NewHaiku'

function Routes(props) {
  const { currentUser } = props;
  return (
    <Switch>
      <Route exact path='/' component={MainHub} />
      <Route 
          path='/movies/:id/' 
          render={(props) => <MovieShow {...props} currentUser={currentUser} />
        } />
      <Route path='/movies/' component={MovieSearch} />
      <Route path='/newhaiku/' render={(props) => <NewHaiku {...props} currentUser={currentUser} />} />
    </Switch>
  )
}

export default Routes;