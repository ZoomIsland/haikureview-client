import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainHub from '../containers/MainHub/MainHub'
import MovieSearch from '../containers/MovieSearch/MovieSearch'
import MovieShow from '../containers/MovieShow/MovieShow'
import NewHaiku from '../components/NewHaiku/NewHaiku'

function Routes(props) {
  return (
    <Switch>
      <Route exact path='/' component={MainHub} />
      <Route path='/movies/:id' render={() => <MovieShow currentUser={props.currentUser} />} />
      <Route path='/movies/' component={MovieSearch} />
      <Route path='/newhaiku/' component={NewHaiku} />
    </Switch>
  )
}

export default Routes;