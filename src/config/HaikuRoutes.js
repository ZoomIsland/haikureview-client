import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainHub from '../containers/MainHub/MainHub';
import NewHaiku from '../containers/NewHaiku/NewHaiku';
import UpdateHaiku from '../containers/UpdateHaiku/UpdateHaiku';

function HaikuRoutes(props) {
  const { currentUser, haikus, onContainerClick,afterHaikuAdd } = props;
  return (
    <Switch>
      <Route 
        exact path='/newhaiku/' 
        render={(props) => <NewHaiku {...props} currentUser={currentUser} afterHaikuAdd={afterHaikuAdd} />} />
      <Route 
        exact path='/updatehaiku/:id' 
        render={(props) => <UpdateHaiku {...props} currentUser={currentUser} />} />
      <Route
        path='/'
        render={(props) => <MainHub {...props} currentUser={currentUser} haikus={haikus} onContainerClick={onContainerClick}/>} />
    </Switch>
  )};

export default HaikuRoutes;