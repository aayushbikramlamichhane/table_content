import { SortOrder } from "./enum";

export interface DataSet {
  readonly [x: string]: unknown;
}
export interface DataStyle {
  readonly [x: string]: unknown;
}

export interface ConfigSet {
  header: string;
  name: string;
  width: string;
  sortEnable?: boolean;
  dataStyle?: DataStyle;
  actions?: ActionSet[];
  [x: string]: unknown;
}

export interface DataStyle {
  type: string;
  styleClass: string;
}

export interface ActionSet {
  type: string;
  icon: string;
  templateItem?: ActionSet[];
}

export interface SortEvent {
  name: string;
  sortOrder: SortOrder;
}

export interface ActionEvent {
  type: string;
  id: number;
}

