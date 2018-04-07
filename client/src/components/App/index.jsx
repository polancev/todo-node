import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListView from '../../pages/ListView';
import './index.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ListView} />
      <Route path="/:category" component={ListView} />
    </Switch>
  </BrowserRouter>
);

export default App;
