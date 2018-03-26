import { CategoryI } from './Category';

export interface TodoI {
  name: string;
  description?: string;
  done: boolean;
  category: CategoryI | null;
  timestamp: Date;
}