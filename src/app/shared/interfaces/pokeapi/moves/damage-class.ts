import { Description, Resource, Name } from '../common';

export interface MoveDamageClass {
  id: number;
  name: string;
  descriptions: Description[];
  moves: Resource[];
  names: Name[];
}
