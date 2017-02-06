import { Description, Name, Resource } from '../common';

export interface ItemAttributes {
  id: number;
  name: string;
  items: Resource[];
  names: Name[];
  descriptions: Description[];
}
