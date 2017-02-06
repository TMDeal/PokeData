import {  VersionEncounterDetail, VersionGameIndex, Resource } from '../common';
import { PokemonAbility } from './ability';
import { PokemonMove } from '../move';
import { PokemonSprites } from './sprites';
import { PokemonStat } from './stat';
import { PokemonType } from './type';

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: Resource[];
  game_indices: VersionGameIndex[];
  held_items: Item[];
  location_area_encounters: LocationAreaEncounter[];
  moves: PokemonMove[];
  sprites: PokemonSprites;
  species: Resource;
  stats: PokemonStat[];
  types: PokemonType[];
}

export interface LocationAreaEncounter {
  location_area: Resource;
  version_details: VersionEncounterDetail[];
}
