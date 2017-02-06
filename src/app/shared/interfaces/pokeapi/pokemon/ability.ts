import {
  Resource,
  Effect,
  Name
} from '../common';

export interface Ability {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: Resource;
  names: Name[];
  effect_entries: Effect[];
  effect_changes: AbilityEffectChange[];
  flavor_text_entries: AbilityFlavorText[];
  pokemon: AbilityPokemon;
}

export interface PokemonAbility {
  pokemon: Resource;
  is_hidden: boolean;
  slot: number;
}

export interface AbilityEffectChange {
  effect_entries: Effect[];
  version_group: Resource;
}

export interface AbilityFlavorText {
  text: string;
  language: Resource;
  version: Resource;
}
