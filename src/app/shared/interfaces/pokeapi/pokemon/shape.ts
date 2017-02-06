import { Name, Resource } from '../common';

export interface PokemonShape {
  id: number;
  name: string;
  awesome_names: Name[];
  names: Name[];
  pokemon_species: Resource[];
}
