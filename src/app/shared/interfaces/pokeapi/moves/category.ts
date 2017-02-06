import { Resource, Description } from '../common';

export interface MoveCategory {
  id: number;
  name: string;
  moves: Resource[];
  descriptions: Description[];
}
