import { Resource } from './common';

interface PageItem extends Resource {
  id: number;
}

export interface PokemonPage {
  count: number;
  next: string;
  previous: string;
  contents: PageItem[];
}
