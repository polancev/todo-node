import { combineReducers } from 'redux';
import categoryReducer, * as Categories from './categoryReducer';

export default combineReducers({
  categories: categoryReducer,
});

export { Categories };
