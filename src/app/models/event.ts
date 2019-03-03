import { Circuit } from './circuit';

export class Event {
  constructor(
      public id: string,
      public date: Date,
      public name: string,
      public circuit: Circuit
  ) {}
}
