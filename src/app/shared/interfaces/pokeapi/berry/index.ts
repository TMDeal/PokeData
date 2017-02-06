import { Resource } from '../common';

export interface Berry {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: Resource;
  flavors: BerryFlavorMap[];
  item: Resource;
  natural_gift_type: Resource;
}

export interface BerryFlavorMap {
  potency: number;
  flavor: Resource;
}
