import { Resource, name } from '../common';

export interface BerryFirmness {
  id: number;
  name: string;
  berries: Resource[];
  names: Name[];
}
