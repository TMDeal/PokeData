import { Resource } from './common';

interface PageItem extends Resource {
  id: number;
}

export interface PokemonPage {
  collectionSize?: number;
  size?: number;
  current?: number;
  contents: PageItem[];
}
