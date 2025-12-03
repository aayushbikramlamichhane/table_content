import { SortOrder } from './enum';

export interface DataSet {
  readonly [x: string]: unknown;
}
export interface DataStyle {
  readonly [x: string]: unknown;
}

export interface ConfigSet {
  readonly config: {
    customLayer: CustomLayer[];
  };
}

export interface CustomLayer {
  readonly header: string;
  readonly name: string;
  readonly width?: string;
  readonly usePipe?: string;
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
  readonly sortOrder: SortOrder;
}

export interface ActionEvent {
  readonly type: string;
  readonly id: number;
}
