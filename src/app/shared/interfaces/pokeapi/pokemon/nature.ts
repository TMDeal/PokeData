import { Resource, Name } from '../common';

export interface Nature {
  id: number;
  name: string;
  decreased_stat: Resource;
  increased_state: Resource;
  // hates_flavor: BerryFlavor;
  // likes_flavor: BerryFlavor;
  pokeathlon_stat_changes: NatureStatChange[];
  move_batt_style_preferences: MoveBattleStylePreference[];
  names: Name[];
}

export interface NatureStatChange {
  max_change: number;
  pokeathlon_stat: Resource;
}

export interface MoveBattleStylePreference {
  low_hp_preference: number;
  high_hp_preference: number;
  move_battle_style: Resource;
}
