import { handleActions } from 'redux-actions';
import { TypeKeys } from '../actions/CategoryActions';

const defaultState = {
  list: [],
  editOpen: false,
  editCategory: null,
};

export default handleActions({
  [TypeKeys.LOAD]: {
    next: (state, action) => ({
      ...state,
      list: action.payload,
    }),
    throw: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  [TypeKeys.TOGGLE]: (state, action) => ({
    ...state,
    list: state.list.map((category) => {
      if (category._id === action.payload.id) {
        return {
          ...category,
          isOpen: action.payload.isOpen,
        };
      }
      return category;
    }),
  }),
  [TypeKeys.EDIT_START]: (state, action) => ({
    ...state,
    editOpen: true,
    editCategory: action.payload.category,
  }),
  [TypeKeys.EDIT_END]: (state, action) => ({
    ...state,
    editOpen: false,
    editCategory: null,
    list: state.list.map((category) => {
      if (category._id === action.payload.category._id) {
        return action.payload.category;
      }
      return category;
    }),
  }),
  [TypeKeys.EDIT_CANCEL]: state => ({
    ...state,
    editOpen: false,
    editCategory: null,
  }),
}, defaultState);
