import { Resource, Name } from '../common';

export interface Stat {
  id: number;
  name: string;
  game_index: number;
  is_battle_only: boolean;
  affecting_moves: StatAffectSets;
  affecting_natures: StatAffectSets;
  characteristics: Resource;
  move_damage_class: Resource;
  names: Name[];
}

export interface StatAffect {
  change: number;
  move: Resource;
}

export interface StatAffectSets {
  increase: StatAffect[];
  decrease: StatAffect[];
}
