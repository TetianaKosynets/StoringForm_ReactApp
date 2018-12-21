import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Result from './result';

const Routes = function() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/result" component={Result} />
    </Switch>
  );
}

export default Routes;
