export interface Resource {
  name?: string;
  url: string;
}

export interface ResourceList {
  count: number;
  next: string;
  previous: string;
  results: Resource[];
}

export interface Name {
  name: string;
  language: Resource;
}

export interface Language {
  id: number;
  name: string;
  offical: boolean;
  iso639: string;
  iso3166: string;
  names: Name[];
}

export interface Description {
  description: string;
  language: Resource;
}

export interface Effect {
  effect: string;
  short_effect?: string;
  language: Resource;
}

export interface Encounter {
  min_level: number;
  max_level: number;
  condition_values: Resource[];
  chance: number;
  method: Resource;
}

export interface FlavorText {
  text: string;
  language: Resource;
}

export interface GenerationGameIndex {
  index: number;
  generation: Resource;
}

export interface VersionGameIndex {
  index: number;
  version: Resource;
}

export interface VersionGroupFlavorText {
  text: string;
  language: Resource;
  version_group: Resource;
}

export interface MachineVersionDetail {
  machine: Resource;
  version_group: Resource;
}

export interface VersionEncounterDetail {
  version: Resource;
  max_chance: number;
  encounter_detauls: Encounter[];
}
