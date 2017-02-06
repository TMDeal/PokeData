import { Name, Resource } from '../common';

export interface Region {
  id: number;
  name: string;
  locations: Resource[];
  main_generation: Resource;
  names: Name[];
  pokedexes: Resource[];
  version_groups: Resource[];
}
