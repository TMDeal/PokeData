import { Resource, Description, Name } from '../common';

export interface MoveTarget {
  id: number;
  name: string;
  descriptions: Description[];
  moves: Resource[];
  names: Name[];
}
