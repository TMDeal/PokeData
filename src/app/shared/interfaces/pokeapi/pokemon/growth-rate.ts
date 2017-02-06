import { Description, Resource } from '../common';

export interface GrowthRate {
  id: number;
  name: string;
  formula: string;
  descriptions: Description[];
  levels: GrowthRateExperienceLevel[];
  species: Resource[];
}

export interface GrowthRateExperienceLevel {
  level: number;
  experience: number;
}
