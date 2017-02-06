import { Resource, Name } from '../common';

export interface EggGroup {
  id: number;
  name: string;
  names: Name[];
  species: Resource;
}
