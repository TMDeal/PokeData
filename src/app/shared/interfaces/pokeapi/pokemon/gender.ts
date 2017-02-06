import { Resource } from '../common';

export interface Gender {
  id: number;
  name: string;
  species_details: PokemonSpeciesGender[];
  required_for_evolution: Resource[];
}

export interface PokemonSpeciesGender {
  rate: number;
  species: Resource;
}
