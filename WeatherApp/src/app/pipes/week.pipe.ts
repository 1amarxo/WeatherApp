import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'week'
})
export class WeekPipe implements PipeTransform {
   gsDayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  
  transform(date: string , ...args: unknown[]): string {

    var d = new Date(date);
    var dayName = this.gsDayNames[d.getDay()];
    return dayName;
  }

}
