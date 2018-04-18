import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './store';
import actions from './actions';
import ListView from './pages/ListView';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

store.dispatch(actions.categoryLoad());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ListView} />
        <Route path="/:category" component={ListView} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
// registerServiceWorker();
