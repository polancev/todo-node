export const TypeKeys = {
  LOADING: 'LOADING',
  LOAD_FINISHED: 'LOAD_FINISHED',
  LOAD_FAILED: 'LOAD_FAILED',
  ADD: 'ADD',
  DELETE_START: 'DELETE_START',
  DELETE_END: 'DELETE_END',
  DELETE_CANCEL: 'DELETE_CANCEL',
  TOGGLE: 'TOGGLE',
  EDIT_START: 'EDIT_START',
  EDIT_END: 'EDIT_END',
  EDIT_CANCEL: 'EDIT_CANCEL',
  ADD_START: 'ADD_START',
  ADD_END: 'ADD_END',
  ADD_CANCEL: 'ADD_CANCEL',
};

const categoriesLoading = () => ({ type: TypeKeys.LOADING });
const categoriesLoaded = categories => ({ type: TypeKeys.LOAD_FINISHED, payload: categories });
const categoriesFailed = error => ({ type: TypeKeys.LOAD_FAILED, payload: error });

export const categoryLoad = () => (dispatch, getState, api) => {
  dispatch(categoriesLoading());
  api.loadCategories()
    .then(categories => dispatch(categoriesLoaded(categories)))
    .catch(error => dispatch(categoriesFailed(error)));
};

export const categoryToggle = (id, isOpen) => ({ type: TypeKeys.TOGGLE, payload: { id, isOpen } });

export const categoryEditStart = category => ({ type: TypeKeys.EDIT_START, payload: { category } });
export const categoryEditEnd = name => ({ type: TypeKeys.EDIT_END, payload: { name } });
export const categoryEditCancel = () => ({ type: TypeKeys.EDIT_CANCEL });

export const categoryDeleteStart = id => ({ type: TypeKeys.DELETE_START, payload: { id } });
export const categoryDeleteEnd = id => ({ type: TypeKeys.DELETE_END, payload: { id } });
export const categoryDeleteCancel = () => ({ type: TypeKeys.DELETE_CANCEL });

export const categoryAddStart = () => ({ type: TypeKeys.ADD_START });
export const categoryAddEnd = (parent, name, id) => ({
  type: TypeKeys.ADD_END,
  payload: { parent, name, id },
});
export const categoryAddCancel = () => ({ type: TypeKeys.ADD_CANCEL });
