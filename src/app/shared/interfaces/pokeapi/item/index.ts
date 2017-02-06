import { MachineVersionDetail, Name, GenerationGameIndex, VersionGroupFlavorText, Effect, Resource } from '../common';
import { ItemSprites } from '../sprites';
import { ItemCategory } from './category';

export interface Item {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  fling_effect: Resource;
  attributes: Resource[];
  category: ItemCategory;
  effect_entries: Effect[];
  flavor_text_entries: VersionGroupFlavorText[];
  game_indices: GenerationGameIndex[];
  names: Name[];
  sprites: ItemSprites;
  held_by_pokemon: ItemHolderPokemon[];
  baby_trigger_for: Resource;
  machines: MachineVersionDetail[];
}

export interface ItemHolderPokemon {
  pokemon: string;
  version_detail: ItemHolderPokemonVersionDetail[];
}

export interface ItemHolderPokemonVersionDetail {
  rarity: string;
  version: Resource;
}

export interface PokemonHeldItem {
  item: Resource;
  version_details: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
  version: Resource;
  rarity;
}
