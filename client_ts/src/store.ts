import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
// import promise from 'redux-promise-middleware';
import * as promise from 'redux-promise';
import categoriesReducer from './reducers/categoryReducer';

export default createStore(
  combineReducers({
    categories: categoriesReducer,
  }),
  {}, 
  applyMiddleware(logger, promise)
);
 