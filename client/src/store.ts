import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
// import promise from 'redux-promise-middleware';
import * as promise from 'redux-promise';
import categoryReducer from './reducers/categoryReducer';

export default createStore(
  combineReducers({
    categoryReducer
  }),
  {}, 
  applyMiddleware(logger, promise)
);
 