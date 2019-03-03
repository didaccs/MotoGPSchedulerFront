import { Time } from '@angular/common';

export class Record {
  constructor(
    public id: string,
    public pilot: string,
    public time: Time
  ) { }
}
