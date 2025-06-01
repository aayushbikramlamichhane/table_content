import { SortOrder } from "./enum";

export interface DataSet {
  readonly [x: string]: unknown;
}
export interface DataStyle {
  readonly [x: string]: unknown;
}

export interface ConfigSet {
  readonly header: string;
  readonly name: string;
  readonly width: string;
  readonly sortEnable?: boolean;
  readonly dataStyle?: DataStyle;
  readonly actions?: ActionSet[];
}

export interface DataStyle {
  readonly type: string;
  readonly styleClass: string;
}

export interface ActionSet {
  readonly type: string;
  readonly icon: string;
  readonly templateItem?: ActionSet[];
}

export interface SortEvent {
  readonly name: string;
   sortOrder: SortOrder;
}

export interface ActionEvent {
  type: string;
  id: number;
}

