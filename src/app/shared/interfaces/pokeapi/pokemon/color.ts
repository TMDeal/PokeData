import { Resource, name } from '../common';

export interface PokemonColor {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: Resource[];
}
