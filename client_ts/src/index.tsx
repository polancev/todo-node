import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.css';
import App from './components/App/index';
import store from './store';
import { categoryLoad } from './actions/categoryActions';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

store.dispatch(
  categoryLoad()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
