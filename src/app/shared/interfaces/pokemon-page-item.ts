import { Resource } from './pokeapi/common';
import { PokemonSprites } from './pokeapi/sprites';

export interface PokemonPageItem extends Resource {
  id: number;
  sprites: PokemonSprites;
}
