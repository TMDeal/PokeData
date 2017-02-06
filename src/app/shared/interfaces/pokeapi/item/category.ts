import { Resource, Name } from '../common';

export interface ItemCategory {
  id: number;
  name: string;
  items: Resource[];
  names: Name[];
  pocket: Resource;
}
