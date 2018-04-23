// import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

import { TypeKeys } from '../actions/CategoryActions';

const initialState = {
  list: [],
  editOpen: false,
  editCategory: null,
  deleteOpen: false,
  deleteCategory: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TypeKeys.LOAD_FINISHED:
      return {
        ...state,
        list: action.payload,
      };
    case TypeKeys.TOGGLE:
      return ({
        ...state,
        list: state.list.map(category => (
          category.id === action.payload.id
            ? {
              ...category,
              isOpen: action.payload.isOpen,
            }
            : category)),
      });
    case TypeKeys.EDIT_START:
      return ({
        ...state,
        editOpen: true,
        editCategory: action.payload.category,
      });
    case TypeKeys.EDIT_END:
      return ({
        ...state,
        editOpen: false,
        editCategory: null,
        list: state.list.map(category => (
          category.id === state.editCategory.id
            ? { ...state.editCategory, name: action.payload.name }
            : category
        )),
      });
    case TypeKeys.EDIT_CANCEL:
      return ({
        ...state,
        editOpen: false,
        editCategory: null,
      });
    case TypeKeys.DELETE_START:
      return ({
        ...state,
        deleteOpen: true,
        deleteCategory: action.payload.id,
      });
    case TypeKeys.DELETE_END:
      return ({
        ...state,
        deleteOpen: false,
        deleteCategory: null,
        list: state.list.filter(category => (
          category.id !== state.deleteCategory
        )),
      });
    case TypeKeys.DELETE_CANCEL:
      return ({
        ...state,
        deleteOpen: false,
        deleteCategory: null,
      });
    default:
      return state;
  }
};


// Selectors: -------------------------------------------
// https://github.com/pdffiller/selectors-samples/blob/sample-4-2/src/reducers/users.js

const MEMORIZE = false;

export const branch = state => state.categories.list;
export const parentSelector = (state, props) => props.parent || null;
export const categoryIdSelector = (state, props) => props.categoryId;

export const categorySelectorCreator = () => (
  createSelector(
    [branch, categoryIdSelector],
    (list, categoryId) => list.find(category => category.id === categoryId),
  )
);

export const categoriesByParentSelectorCreator = () => (
  createSelector(
    [branch, parentSelector],
    (list, parent) => list.filter(category => category.parent === parent),
  )
);

export const getCategoryEntities = createSelector(
  branch,
  state => state.byId,
  MEMORIZE,
);
