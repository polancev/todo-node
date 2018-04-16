import { createAction } from 'redux-actions';

export const TypeKeys = {
  LOADING: 'LOADING',
  LOAD_FINISHED: 'LOAD_FINISHED',
  LOAD_FAILED: 'LOAD_FAILED',
  ADD: 'ADD',
  DELETE: 'DELETE',
  TOGGLE: 'TOGGLE',
  EDIT_START: 'EDIT_START',
  EDIT_END: 'EDIT_END',
  EDIT_CANCEL: 'EDIT_CANCEL',
};

const categoriesLoading = () => ({ type: TypeKeys.LOADING });
const categoriesLoaded = categories => ({ type: TypeKeys.LOAD_FINISHED, payload: categories });
const categoriesFailed = error => ({ type: TypeKeys.LOAD_FAILED, payload: error });

export const categoryLoad = () => (dispatch, getState, api) => {
  dispatch(categoriesLoading());
  return new Promise(resolve => resolve({ type: TypeKeys.LOAD_FINISHED }));
  // api.loadCategories()
  //   .then(categories => dispatch(categoriesLoaded(categories)))
  //   .catch(error => dispatch(categoriesFailed(error)));
};

export const categoryToggle = createAction(
  TypeKeys.TOGGLE,
  (id, isOpen) => ({
    id,
    isOpen,
  }),
);

export const categoryEditStart = createAction(
  TypeKeys.EDIT_START,
  category => ({ category }),
);

export const categoryEditEnd = createAction(
  TypeKeys.EDIT_END,
  category => ({ category }),
);

export const categoryEditCancel = createAction(TypeKeys.EDIT_CANCEL);
