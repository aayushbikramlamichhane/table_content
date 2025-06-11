export interface ViewDataSet {
  [x: string]: unknown;
}

export interface ViewConfigSet {
  customLayer : ViewCustomLayer[]
}

export interface ViewCustomLayer {
  key: string;
  label: string;
  styleClass: string;
  dataType: string;
  usePipe: string;
}