export enum SERIES_TYPE {
  NERVE = 'nerve',
  COACT = 'coact',
  ALTER_EGO = 'alter-ego',
}

export interface Series {
  type: SERIES_TYPE;
  title?: string;
  description?: string;
}
