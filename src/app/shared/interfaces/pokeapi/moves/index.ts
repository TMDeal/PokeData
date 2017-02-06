import { Name, MachineVersionDetail, FlavorText, Effect, Resource } from '../common';
import { AbilityEffectChange } from '../pokemon/ability';

export interface Move {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;
  contest_combos: ContestComboSets;
  contest_type: Resource;
  contest_effect: Resource;
  damage_class: Resource;
  effect_entries: Effect[];
  effect_changes: AbilityEffectChange[];
  flavor_text_entries: MoveFlavorText;
  generation: Resource;
  machines: MachineVersionDetail[];
  meta: MoveMetaData;
  names: Name[];
  past_values: PastMoveStatValues[];
  stat_changes: MoveStatChange[];
  super_contest_effect: Resource;
  target: Resource;
  type: Resource;
}

export interface MoveFlavorText extends FlavorText {
  version_group: Resource;
}

export interface MoveMetaData {
  ailment: Resource;
  category: Resource;
  min_hits: number;
  max_hits: number;
  min_turns: number;
  max_turns: number;
  drain: number;
  healing: number;
  crit_rate: number;
  ailment_chance: number;
  flinch_chance: number;
  stat_chance: number;
}

export interface MoveStatChange {
  change: number;
  stat: Resource;
}

export interface PastMoveStatValues {
  accuracy: number;
  effect_chance: number;
  power: number;
  pp: number;
  effect_entries: Effect[];
  type: Resource;
  version_group: Resource;
}

export interface ContestComboDetail {
  use_before: Resource[];
  use_after: Resource[];
}

export interface ContestComboSets {
  normal: ContestComboDetail;
  super: ContestComboDetail;
}
