export interface ViewDataSet {
  [x: string]: unknown;
}

export interface ViewConfigSet {
  defaultColumn: number;
  customLayer: ViewCustomLayer[];
}

export interface ViewCustomLayer {
  key: string;
  label?: string;
  styleClass?: string;
  dataType?: string;
  usePipe?: string;
  occupySpace?: number;
  getValueFrom?: string[];
}