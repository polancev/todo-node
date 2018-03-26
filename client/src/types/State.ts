import { CategoryI } from '../types/Category';
import { TodoI } from '../types/Todo';

export default interface State {
  categoryList: Array<CategoryI>;
  todoList: Array<TodoI>;
}
