import axios from 'axios';
// import { createAction } from 'typesafe-actions';
import { createAction } from 'redux-actions';
import { CategoryI } from '../types/Category';

export enum CategoryTypeKeys {
  CATEGORY_LOAD   = 'CATEGORY_LOAD',
  CATEGORY_ADD    = 'CATEGORY_ADD',
  CATEGORY_DELETE = 'CATEGORY_DELETE',
  CATEGORY_UPDATE = 'CATEGORY_UPDATE',
  CATEGORY_TOGGLE = 'CATEGORY_TOGGLE',
}

export interface CategoryLoadAction {
  type: CategoryTypeKeys.CATEGORY_LOAD;
  categories: Array<CategoryI>;
}

export const categoryLoadActions = createAction(
  CategoryTypeKeys.CATEGORY_LOAD, 
  async () => ({
    type: CategoryTypeKeys.CATEGORY_LOAD,
    categories: await axios
      .get('http://localhost:7777/category')
      .then(res => res.data),
  })
);

export interface CategoryAddAction {
  type: CategoryTypeKeys.CATEGORY_ADD;
  name: string;
}

export interface CategoryDeleteAction {
  type: CategoryTypeKeys.CATEGORY_DELETE;
}

export interface CategoryUpdateAction {
  type: CategoryTypeKeys.CATEGORY_UPDATE;
}

export interface CategoryToggleAction {
  type: CategoryTypeKeys.CATEGORY_TOGGLE;
  id: string;
  toggle: boolean;
}

export type CategoryActionTypes =
  | CategoryLoadAction
  | CategoryAddAction
  | CategoryDeleteAction
  | CategoryUpdateAction
  | CategoryToggleAction;
