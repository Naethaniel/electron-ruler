import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import Ruler from './components/Ruler'

export default () => (
  <App>
    <Switch>
      <Route path={routes.RULER} component={Ruler} />
    </Switch>
  </App>
);
