import { Resource, Description, Name } from '../common';

export interface MoveLearnMethod {
  id: number;
  name: string;
  descriptions: Description[];
  names: Name[];
  version_groups: Resource[];
}
