export interface ViewDataSet {
  [x: string]: unknown;
}

export interface ViewConfigSet {
  customLayer: ViewCustomLayer[];
}

export interface ViewCustomLayer {
  header: string;
  name: string;
  styleClass: string;
  dataType: string;
  usePipe: string;
}
