import { CategoriesState } from '../types/State';
import { 
  CategoryTypeKeys,
  CategoryLoadAction,
  CategoryToggleAction,
} from '../types/CategoryActions';
// import { CategoryI } from '../types/Category';
import { handleActions } from 'redux-actions';

export default handleActions(
  {
    [CategoryTypeKeys.LOAD]: {
      next: (state, action: CategoryLoadAction) => ({
        ...state,
        list: action.payload,
      }),
      throw: (state, action: CategoryLoadAction) => ({
        ...state,
        error: action.payload,
      }),
    },
    [CategoryTypeKeys.TOGGLE]: (state, action: CategoryToggleAction) => ({
      ...state,
      categories: state.categories.list.map(category => {
        if (category._id === action.id) {
          return {
            ...category,
            toggle
          }
        }
      }),
    })
  }, 
  {
    categories: [],
  }
);
