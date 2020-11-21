import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DashboardHeros from '../pages/DashboardHeros';
import InfoHero from '../pages/InfoHero';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={DashboardHeros} />
    {/* <Route path="/dashboard/:id" exact component={DashboardHeros} /> */}
    <Route path="/info/:id" component={InfoHero} />
  </Switch>
);

export default Routes;
