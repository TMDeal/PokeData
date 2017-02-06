import { Resource } from '../common';

export interface Machine {
  id: number;
  item: Resource;
  move: Resource;
  version_group: Resource;
}
