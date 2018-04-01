import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import promise from 'redux-promise';

const defaultState = {};

export default createStore(
  combineReducers({

  }),
  defaultState,
  applyMiddleware(logger, promise),
);
