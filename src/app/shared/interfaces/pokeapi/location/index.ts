import { Resource, Name, GenerationGameIndex } from '../common';
import { EncounterMethodRate, PokemonEncounter } from '../encounter';

export interface Location {
  id: number;
  name: string;
  region: Resource;
  names: Name[];
  game_indices: GenerationGameIndex[];
  areas: Resource[];
}

export interface LocationArea {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: EncounterMethodRate[];
  location: Resource;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
}
