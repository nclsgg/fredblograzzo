import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Main from '~/pages/Main';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/main" component={Main} isPrivate />
    </Switch>
  );
}
