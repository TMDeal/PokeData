import { Effect, Resource } from '../common';

export interface ItemFlingEffect {
  id: number;
  name: string;
  effect_entries: Effect[];
  items: Resource[];
}
