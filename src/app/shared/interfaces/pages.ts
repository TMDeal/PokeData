export interface Page<T> {
  collectionSize?: number;
  size?: number;
  current?: number;
  contents: T[];
}
