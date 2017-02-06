import { Name, Resource } from '../common';

export interface EvolutionChain {
  id: number;
  baby_trigger_item: Resource;
  chain: ChainLink;
}

export interface ChainLink {
  is_baby: boolean;
  species: Resource;
  evolution_details: EvolutionDetails[];
  evolves_to: ChainLink[];
}

export interface EvolutionTrigger {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: Resource[];
}

export interface EvolutionDetails {
  item: Resource;
  trigger: Resource;
  gender: number;
  held_item: Resource;
  known_move: Resource;
  known_move_type: Resource;
  location: number;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_effection: number;
  needs_overworld_rain: boolean;
  party_species: Resource;
  party_type: Resource;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: Resource;
  turn_upside_down: boolean;
}
