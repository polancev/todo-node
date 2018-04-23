import { createSelector } from 'reselect';

import { TypeKeys } from '../actions/CategoryActions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case TypeKeys.LOAD_FINISHED:
      return action.payload.map(category => ({
        id: category.id,
        parent: category.parent,
      }));
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
