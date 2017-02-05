import { PokemonPageItem } from './pokemon-page-item';
export interface PokemonPage {
  next: string;
  previous: string;
  contents: PokemonPageItem[];
}
