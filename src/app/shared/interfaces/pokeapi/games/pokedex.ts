import { Description, Name, Resource } from '../common';

export interface Pokedex {
  id: number;
  name: string;
  is_main_series: boolean;
  descriptions: Description[];
  names: Name[];
  pokemon_entries: PokemonEntry[];
  region: Resource;
  version_groups: Resource[];
}

export interface PokemonEntry {
  entry_number: number;
  pokemon_species: Resource;
}
