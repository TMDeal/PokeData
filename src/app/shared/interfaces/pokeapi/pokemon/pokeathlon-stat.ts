import { Resource, Name } from '../common';

export interface PokeathlonStat {
  id: number;
  name: string;
  names: Name[];
  affecting_nature: NaturePokeathlonStatAffectSets;
}

export interface NaturePokeathlonStatAffectSets {
  increase: NaturePokeathlonStatAffect;
  decrease: NaturePokeathlonStatAffect;
}

export interface NaturePokeathlonStatAffect {
  max_change: number;
  nature: Resource;
}
