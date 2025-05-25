import { SortOrder } from "./enum";

export interface TableData {
  readonly [x: string]: unknown;
}


export interface TableEvent {
  name: string;
  sortOrder: SortOrder;
}