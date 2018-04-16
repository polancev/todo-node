import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
// import promise from 'redux-promise';
import thunk from 'redux-thunk';
import * as api from './api';
import categoryReducer from './reducers/categoryReducer';

const initialState = {};

export default createStore(
  combineReducers({
    categories: categoryReducer,
  }),
  initialState,
  applyMiddleware(logger, thunk.withExtraArgument(api)),
);
