export enum CategoryTypeKeys {
  CATEGORY_LOAD   = 'CATEGORY_LOAD',
  CATEGORY_ADD    = 'CATEGORY_ADD',
  CATEGORY_DELETE = 'CATEGORY_DELETE',
  CATEGORY_UPDATE = 'CATEGORY_UPDATE',
  CATEGORY_TOGGLE = 'CATEGORY_TOGGLE',
}

export interface CategoryLoadAction {
  type: CategoryTypeKeys.CATEGORY_LOAD;
}

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
