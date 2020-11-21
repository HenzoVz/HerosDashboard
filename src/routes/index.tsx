import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DashboardHeros from '../pages/DashboardHeros';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={DashboardHeros} />
    <Route path="/repositories/:repository+" component={DashboardHeros} />
  </Switch>
);

export default Routes;
