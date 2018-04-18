// import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { TypeKeys } from '../actions/CategoryActions';

const initialState = {
  list: [],
  editOpen: false,
  editCategory: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TypeKeys.LOAD_FINISHED:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

// export handleActions({
//   [TypeKeys.LOAD]: {
//     next: (state, action) => ({
//       ...state,
//       categories: action.payload,
//       // list: action.payload.map(category => category._id),
//       // entities: action.payload.reduce(
//       //   (acc, category) => {
//       //     acc[category._id] = category;
//       //     return acc;
//       //   },
//       //   {},
//       // ),
//     }),
//     throw: (state, action) => ({
//       ...state,
//       error: action.payload,
//     }),
//   },
//   [TypeKeys.TOGGLE]: (state, action) => ({
//     ...state,
//     list: state.list.map((category) => {
//       if (category._id === action.payload.id) {
//         return {
//           ...category,
//           isOpen: action.payload.isOpen,
//         };
//       }
//       return category;
//     }),
//   }),
//   [TypeKeys.EDIT_START]: (state, action) => ({
//     ...state,
//     editOpen: true,
//     editCategory: action.payload.category,
//   }),
//   [TypeKeys.EDIT_END]: (state, action) => ({
//     ...state,
//     editOpen: false,
//     editCategory: null,
//     list: state.list.map((category) => {
//       if (category._id === action.payload.category._id) {
//         return action.payload.category;
//       }
//       return category;
//     }),
//   }),
//   [TypeKeys.EDIT_CANCEL]: state => ({
//     ...state,
//     editOpen: false,
//     editCategory: null,
//   }),
// }, initialState);

// Selectors: -------------------------------------------
// https://github.com/pdffiller/selectors-samples/blob/sample-4-2/src/reducers/users.js

const MEMORIZE = false;

export const categoriesSelector = state => state.categories.list;
export const parentSelector = (state, props) => props.parent || null;

export const categoriesByParentCreator = () => (
  createSelector(
    [categoriesSelector, parentSelector],
    (list, parent) => list.filter(category => category.parent === parent),
  )
);

export const getCategoryEntities = createSelector(
  categoriesSelector,
  state => state.byId,
  MEMORIZE,
);
