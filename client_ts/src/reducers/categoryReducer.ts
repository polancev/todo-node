import { CategoriesState } from '../types/State';
import { CategoryI } from '../types/Category';
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
      next: (state: CategoriesState, action: CategoryLoadAction) => ({
        ...state,
        list: action.payload,
      }),
      throw: (state: CategoriesState, action: CategoryLoadAction) => ({
        ...state,
        error: action.payload,
      }),
    },
    [CategoryTypeKeys.TOGGLE]: (state: CategoriesState, action: CategoryToggleAction) => ({
      ...state,
      categories: state.list.map(category => {
        if (category._id === action.id) {
          return {
            ...category,
            toggle: action.toggle,
          };
        } 
        return category;
      }),
    })
  }, 
  {
    list: new Array<CategoryI>(),
  }
);
