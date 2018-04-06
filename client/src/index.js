import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.css';
import store from './store';
import App from './components/App';
import { categoryLoad } from './actions/CategoryActions';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

store.dispatch(categoryLoad());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
// registerServiceWorker();
