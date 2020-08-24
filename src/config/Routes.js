import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainHub from '../containers/MainHub/MainHub'
import MovieSearch from '../containers/MovieSearch/MovieSearch'
import MovieShow from '../containers/MovieShow/MovieShow'
import HaikuShowContainer from '../containers/HaikuShowContainer/HaikuShowContainer'
import NewHaiku from '../containers/NewHaiku/NewHaiku'
import UpdateHaiku from '../containers/UpdateHaiku/UpdateHaiku'
import ProfilePage from '../containers/ProfilePage/ProfilePage'

function Routes(props) {
  const { currentUser } = props;
  return (
    <Switch>
      <Route 
        path='/profiles/:id' 
        render={(props) => <ProfilePage {...props} currentUser={currentUser} />} />
      <Route 
        path='/movies/' 
        component={MovieSearch} />
    </Switch>
  )
}

export default Routes;