import { Name, Resource } from '../common';

export interface Version {
  id: number;
  name: string;
  names: Name[];
  version_groups: Resource[];
}

export interface VersionGroup {
  id: number;
  name: string;
  order: number;
  generation: Resource;
  move_learn_methods: Resource[];
  pokedexes: Resource[];
  regions: Resource[];
  versions: Resource[];
}
