import { Resource, Name, Description } from '../common';

export interface Generation {
  id: number;
  name: string;
  abilities: Resource[];
  names: Name[];
  main_region: Resource;
  moves: Resource[];
  pokemon_species: Resource[];
  types: Resource[];
  version_groups: Resource[];
}
