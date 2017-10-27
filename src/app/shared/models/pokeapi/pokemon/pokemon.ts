import {
  NamedResource,
  VersionGameIndex,
  VersionEncounterDetail
} from '../common';

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilites: PokemonAbility[];
  forms: NamedResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: LocationAreaEncounter[];
  moves: PokemonMove[];
  sprites: PokemonSprites;
  species: NamedResource;
  stats: PokemonStat[];
  types: PokemonType[];
}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedResource;
}

export interface PokemonType {
  slot: number;
  type: NamedResource;
}

export interface PokemonMove {
  move: NamedResource;
  version_group_details: PokemonMoveVersion[];
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export interface PokemonMoveVersion {
  move_learn_method: NamedResource;
  version_group: NamedResource;
  level_learned_at: number;
}

export interface PokemonStat {
  stat: NamedResource;
  effort: number;
  base_stat: number;
}

export interface PokemonHeldItem {
  item: NamedResource;
  version_details: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
  version: NamedResource;
  rarity: number;
}

export interface LocationAreaEncounter {
  location_area: NamedResource;
  version_details: VersionEncounterDetail[];
}
