import { VersionEncounterDetail, Name, Resource } from '../common';

interface EncounterBase {
  id: number;
  name: string;
  names: Name[];
}

export interface EncounterMethod extends EncounterBase {
  order: number;
}

export interface EncounterCondition extends EncounterBase {
  values: Resource[];
}

export interface EncounterConditionValue extends EncounterBase {
  condition: Resource[];
}

export interface EncounterMethodRate {
  encounter_method: Resource;
  version_details: EncounterVersionDetails[];
}

export interface EncounterVersionDetails {
  rate: number;
  version: Resource;
}

export interface PokemonEncounter {
  pokemon: Resource;
  version_details: VersionEncounterDetail[];
}
