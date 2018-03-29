export interface CategoryI {
  name: string;
  isOpen: boolean;
  parent: CategoryI | null;
  timestamp: Date;
}

export type Category = {
  name: string;
  isOpen: boolean;
  parent: CategoryI | null;
  timestamp: Date;
};
