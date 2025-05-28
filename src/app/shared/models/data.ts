import { SortOrder } from "./enum";

export interface DataSet {
  readonly [x: string]: unknown;
}


export interface SortEvent {
  name: string;
  sortOrder: SortOrder;
}

export interface TypeEvent {
  type: string;
  id: number;
}