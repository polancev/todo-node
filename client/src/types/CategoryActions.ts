// import { PromiseAction } from 'redux';
import { CategoryI } from '../types/Category';

export enum CategoryTypeKeys {
  LOAD   = 'CATEGORY_LOAD',
  ADD    = 'CATEGORY_ADD',
  DELETE = 'CATEGORY_DELETE',
  UPDATE = 'CATEGORY_UPDATE',
  TOGGLE = 'CATEGORY_TOGGLE',
}

export interface CategoryLoadAction<T> {
  type: CategoryTypeKeys.LOAD;
  payload: T;
  error?: boolean;
  meta?: CategoryI;
}

export interface CategoryAddAction {
  type: CategoryTypeKeys.ADD;
  name: string;
}

export interface CategoryDeleteAction {
  type: CategoryTypeKeys.DELETE;
}

export interface CategoryUpdateAction {
  type: CategoryTypeKeys.UPDATE;
}

export interface CategoryToggleAction {
  type: CategoryTypeKeys.TOGGLE;
  id: string;
  toggle: boolean;
}

export type CategoryActionTypes =
  | CategoryLoadAction<CategoryI[]>
  | CategoryAddAction
  | CategoryDeleteAction
  | CategoryUpdateAction
  | CategoryToggleAction;
