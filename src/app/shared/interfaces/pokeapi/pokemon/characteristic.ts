import { Description } from '../common';

export interface Characteristic {
  id: number;
  gene_modulo: number;
  possible_values: number[];
  descriptions: Description[];
}
