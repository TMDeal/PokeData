import { Effect, FlavorText } from '../common';

export interface ContestEffect {
  id: number;
  appeal: number;
  flavor_text_entries: FlavorText[];
}

export interface NormalContestEffect extends ContestEffect {
  jam: number;
  effect_entries: Effect[];
}

export interface SuperContestEffect extends ContestEffect {
  moves: Resource[];
}
