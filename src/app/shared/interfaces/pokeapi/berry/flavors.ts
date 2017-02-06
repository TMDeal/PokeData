import { Resource, Name } from '../common';

export interface BerryFlavor {
  id: number;
  name: string;
  berries: FlavorBerryMap[];
  contest_type: Resource;
  names: Name[];
}

export interface FlavorBerryMap {
  potency: number;
  berry: Resource;
}
