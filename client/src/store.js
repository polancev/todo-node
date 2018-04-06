import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import promise from 'redux-promise';
import categoryReducer from './reducers/categoryReducer';

const defaultState = {};

export default createStore(
  combineReducers({
    categories: categoryReducer,
  }),
  defaultState,
  applyMiddleware(logger, promise),
);
