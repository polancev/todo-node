import { createSelector } from 'reselect';

import { TypeKeys } from '../actions/CategoryActions';

const initialState = [];

function isChild(state, category, id) {
  if (category.parent === id) {
    return true;
  }
  if (category.parent === null) {
    return false;
  }
  const parent = state.find(cat => cat.id === category.parent);
  return isChild(
    state,
    parent,
    id,
  );
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TypeKeys.LOAD_FINISHED:
      return action.payload.map(category => ({
        id: category.id,
        parent: category.parent,
      }));
    case TypeKeys.DELETE_END:
      return state.filter(category =>
        category.id !== action.payload.id && !isChild(state, category, action.payload.id));
    case TypeKeys.ADD_END:
      return [
        ...state,
        {
          id: action.payload.id,
          parent: action.payload.parent,
        },
      ];
    default:
      return state;
  }
};

// selectors ------------------------------------
const branch = state => state.categoryList;
const parentSelector = (state, props) => props.parent || null;

export const categoriesByParentSelectorCreator = () => (
  createSelector(
    [branch, parentSelector],
    (list, parent) => list.filter(category => category.parent === parent),
  )
);
