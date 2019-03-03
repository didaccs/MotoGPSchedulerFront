import { Country } from './country';
import { Record } from './record';

export class Circuit {
  constructor(
      public id: string,
      public name: string,
      public length: number,
      public turnsLeft: number,
      public turnsRight: number,
      public width: number,
      public straightLong: number,
      public record: Record,
      public country: Country
  ) {}
}
