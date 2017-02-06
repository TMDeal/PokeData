import { Name, Resource } from '../common';

export interface ContestType {
  id: number;
  name: string;
  berry_flavor: Resource;
  names: ContestName[];
}

export interface ContestName extends Name {
  color: string;
}
