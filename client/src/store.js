import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import * as api from './api';
import reducer from './reducers';

const initialState = {};

const enhancer = applyMiddleware(
  logger,
  thunk.withExtraArgument(api),
);

export default createStore(
  reducer,
  initialState,
  enhancer,
);
