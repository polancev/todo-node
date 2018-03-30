export interface CategoryI {
  _id: string;
  name: string;
  isOpen: boolean;
  parent: CategoryI | null;
  timestamp: Date;
}
