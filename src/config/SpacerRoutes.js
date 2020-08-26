import React from 'react';
import { Switch, Route } from 'react-router-dom';

function SpacerRoutes(props) {
  return (
    <Switch>
      <Route 
        path='/profiles/' 
        render={() => <div className="topSpacer"></div>} />
      <Route 
        path='/movies/' 
        render={() => <div className="topSpacer"></div>} />
    </Switch>
  )
}

export default SpacerRoutes;