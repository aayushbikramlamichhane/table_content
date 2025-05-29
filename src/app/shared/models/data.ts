import { SortOrder } from "./enum";

export interface DataSet {
  readonly [x: string]: unknown;
}
export interface DataStyle {
  readonly [x: string]: unknown;
}

export interface SortEvent {
  name: string;
  sortOrder: SortOrder;
}

export interface ActionEvent {
  type: string;
  id: number;
}

