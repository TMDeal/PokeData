import { Resource, Name, FalvorText, Description } from '../common';

export interface PokemonSpecies {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: Resource;
  pokedex_numbers: PokemonSpeciesDexEntry[];
  egg_groups: Resource[];
  color: Resource;
  shape: Resource;
  evolves_from_species: Resource;
  evolution_chain: Resource;
  habitat: Resource;
  generation: Resource;
  names: Name[];
  pal_park_encounters: PalParkEncounterArea[];
  flavor_text_entries: FlavorText[];
  form_descriptions: Description[];
  genera: Genus[];
  varieties: PokemonSpeciesVariety[];
}

export interface Genus {
  genus: string;
  language: Resource;
}

export interface PokemonSpeciesDexEntry {
  entry_number: number;
  pokedex: Resource;
}

export interface PalParkEncounterArea {
  base_score: number;
  rate: number;
  area: Resource;
}

export interface PokemonSpeciesVariety {
  is_default: boolean;
  pokemon: Resource;
}
