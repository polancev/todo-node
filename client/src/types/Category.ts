export interface CategoryI {
  name: string;
  isOpen: boolean;
  parent: CategoryI | null;
  timestamp: Date;
}
