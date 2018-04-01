import { handleActions } from 'redux-actions';
import { TypeKeys } from '../actions/CategoryActions';

const defaultState = {};
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
  [TypeKeys]: (state, action) => ({
    ...state,
    list: state.list.map((category) => {
      if (category._id === action._id) {
        return {
          ...category,
          toggle: action.toggle,
        };
      }
      return category;
    }),
  }),
}, defaultState);
