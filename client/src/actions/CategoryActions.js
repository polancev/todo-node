import axios from 'axios';
import { createAction } from 'redux-actions';

const BASE_URL = 'http://localhost:7777';

export const TypeKeys = {
  LOAD: 'LOAD',
  ADD: 'ADD',
  DELETE: 'DELETE',
  TOGGLE: 'TOGGLE',
  EDIT_START: 'EDIT_START',
  EDIT_END: 'EDIT_END',
  EDIT_CANCEL: 'EDIT_CANCEL',
};

export const categoryLoad = createAction(
  TypeKeys.LOAD,
  async () => {
    const { data } = await axios({
      method: 'GET',
      url: `${BASE_URL}/category/`,
    });
    return data;
  },
);

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
