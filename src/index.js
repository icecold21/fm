import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import MainApp from './components/MainApp';
import './index.css';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={ store }>
    <Router path="/" history={ history }>
      <Switch>
        <Route path="/" component={ MainApp } />
      </Switch>
    </Router>
  </Provider>, document.getElementById('root')
);