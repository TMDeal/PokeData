import { Name, Resource } from '../common';
import { PokemonFormSprites } from '../sprites';

export interface PokemonForm {
  id: number;
  name: string;
  order: number;
  form_order: number;
  is_default: boolean;
  is_battle_only: boolean;
  is_mega: boolean;
  form_name: string;
  pokemon: Resource;
  sprites: PokemonFormSprites;
  version_group: Resource;
  names: Name[];
  form_names: Name[];
}
