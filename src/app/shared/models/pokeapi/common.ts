export type url = string;

export interface Resource {
  url: url;
}

export interface NamedResource {
  url: url;
  name: string;
}

export interface ResourceList {
  count: number;
  results: Resource[];
}

export interface NamedResourceList {
  count: number;
  results: NamedResource[];
}

export interface Description {
  description: string;
  language: NamedResource;
}

export interface Effect {
  effect: string;
  language: NamedResource;
}

export interface Encounter {
  min_level: number;
  max_level: number;
  condition_values: NamedResource;
  chance: number;
  method: NamedResource;
}

export interface FlavorText {
  flavor_text: string;
  language: NamedResource;
}

export interface GenerationGameIndex {
  game_index: number;
  generation: NamedResource;
}

export interface MachineVersionDetail {
  machine: Resource;
  version_group: NamedResource;
}

export interface Name {
  name: string;
  language: NamedResource;
}

export interface VerboseEffect {
  effect: string;
  short_effect: string;
  language: NamedResource;
}

export interface VersionEncounterDetail {
  version: NamedResource;
  max_chance: number;
  encounter_details: Encounter[];
}

export interface VersionGameIndex {
  game_index: number;
  version: NamedResource;
}

export interface VersionGroupFlavorText {
  text: string;
  language: NamedResource;
  version_group: NamedResource;
}
