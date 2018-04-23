import { combineReducers } from 'redux';
import categories, * as Categories from './category';
import categoryList, * as CategoryList from './category-list';
import loading, * as Loading from './loading';
import editMode, * as EditMode from './editMode';

export default combineReducers({
  categories,
  categoryList,
  editMode,
  loading,
});

export { Categories, CategoryList, Loading, EditMode };
