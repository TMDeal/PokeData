import { GenerationGameIndex, Resource, Name } from '../common';

export interface Type {
  id: number;
  name: string;
  damage_relations: TypeRelations;
  game_indices: GenerationGameIndex[];
  generation: Resource;
  move_damage_class: Resource;
  names: Name[];
  pokemon: PokemonType;
  moves: Resource[];
}

export interface PokemonType {
  slot: number;
  pokemon: Resource;
}

export interface TypeRelations {
  no_damage_to: Resource[];
  half_damage_to: Resource[];
  double_damage_to: Resource[];
  no_damage_from: Resource[];
  half_damage_from: Resource[];
  double_damage_from: Resource[];
}
