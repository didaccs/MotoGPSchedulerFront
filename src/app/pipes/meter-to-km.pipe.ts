import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meterToKm'
})
export class MeterToKmPipe implements PipeTransform {

  transform(value: number): number {
    return value / 1000;
  }

}
