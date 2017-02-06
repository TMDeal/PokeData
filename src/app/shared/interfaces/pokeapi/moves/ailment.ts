import { Resource, Name } from '../common';

export interface MoveAilment {
  id: number;
  name: string;
  moves: Resource[];
  names: Name[];
}
