import State from '../types/State';
import { CategoryActionTypes, CategoryTypeKeys } from '../types/CategoryActions';

const categoryReducer = (state: State, action: CategoryActionTypes) => {
  switch (action.type) {
    case CategoryTypeKeys.CATEGORY_LOAD:
      return state;
    default:
      return state;
  }
};

export default categoryReducer;
