import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import categoryReducer from './reducers/categoryReducer';

export default createStore(
  combineReducers({
    categoryReducer
  }),
  {}, 
  applyMiddleware(logger)
);
