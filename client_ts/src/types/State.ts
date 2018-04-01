import { CategoryI } from '../types/Category';
import { TodoI } from '../types/Todo';

export interface CategoriesState {
  list: CategoryI[];
  error: Error;
}

export interface TodoesState {
  list: TodoI[];
}

export default interface StateI {
  categories: CategoriesState;
  // todoes: TodoesState;
}
