import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeToString'
})
export class TimeToStringPipe implements PipeTransform {

  transform(value: string): string {
    const  milis = Number(value.split('.')[1]);
    const elems = value.split('.')[0].split(':');

    return elems[1] + '\'' + elems[2] + ':' + Math.round(milis / 10000);
  }

}
