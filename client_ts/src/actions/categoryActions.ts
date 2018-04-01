import axios from 'axios';
import { createAction } from 'redux-actions';
import { CategoryTypeKeys } from '../types/CategoryActions';
// import { CategoryI } from '../types/Category';

const BASE_URL = 'http://localhost:7777';

export const categoryLoad = createAction(
  CategoryTypeKeys.LOAD,
  async () => {
    const { data } = await axios({
      method: 'GET',
      url: `${BASE_URL}/category/`,
    });
    return data;
  }
);

export const categoryToggle = createAction(
  CategoryTypeKeys.TOGGLE,
  (id: string, toggle: boolean) => ({
    id,
    toggle,
  }),
);
