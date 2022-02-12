import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(date: string, ...args: unknown[]): string {
    
    
    date= date.split(' ')[1];
    return date;

  }

}
