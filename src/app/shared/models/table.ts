import { SortOrder } from 'src/app/components/table-wrapper/components/shared/models/enum';

export interface DataSet {
  [x: string]: unknown;
}
export interface DataStyle {
  [x: string]: unknown;
}



export interface ConfigSet {
  config: {
    customLayer: CustomLayer[]
  };
}

export interface CustomLayer {
  header: string;
  name: string;
  width?: string;
  usePipe?: string
  sortEnable?: boolean;
  dataStyle?: DataStyle;
  actions?: ActionSet[];
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
