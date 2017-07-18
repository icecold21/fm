import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import MainApp from './components/MainApp';

const history = createBrowserHistory();

ReactDOM.render(
  <Router path="/" history={ history }>
    <Switch>
      <Route path="/" component={ MainApp } />
      <Route path="/app" component={ MainApp } />
    </Switch>
  </Router>, document.getElementById('root')
);