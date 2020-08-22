import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainHub from '../containers/MainHub/MainHub'
import MovieSearch from '../containers/MovieSearch/MovieSearch'

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={MainHub} />
      <Route path='/movies/' component={MovieSearch} />
    </Switch>
  )
}

export default Routes;