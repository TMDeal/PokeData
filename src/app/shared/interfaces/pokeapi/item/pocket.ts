import { Name, Resource } from '../common';

export interface ItemPocket {
  id: number;
  name: string;
  categories: Resource[];
  names: Name[];
}
