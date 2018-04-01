import axios from 'axios';
import { createAction } from 'redux-actions';

const BASE_URL = 'http://localhost:7777';

export const TypeKeys = {
  LOAD: 'LOAD',
  ADD: 'ADD',
  TOGGLE: 'TOGGLE',
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
  (id, toggle) => ({
    id,
    toggle,
  }),
);
