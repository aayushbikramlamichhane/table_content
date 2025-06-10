export interface ViewDataSet {
  readonly [x: string]: unknown;
}

export interface ViewConfigSet {
  readonly customLayer: ViewCustomLayer[];
}


export interface ViewCustomLayer {
  readonly header: string;
  readonly name: string;
  readonly styleClass: string;
  readonly dataType: string;
  readonly usePipe: string;
}
