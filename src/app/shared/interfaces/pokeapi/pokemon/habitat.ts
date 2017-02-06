import { Name, Resource } from '../common';

export interface PokemonHabitat {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: Resource[];
}
