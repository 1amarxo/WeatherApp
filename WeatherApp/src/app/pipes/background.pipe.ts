import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'background'
})
export class BackgroundPipe implements PipeTransform {

  transform(is_day: number): string {
    console.log('1');
    if(is_day==1){
      return '/assets/background-image/day.jpg';
    }
    if(is_day==0){
      console.log('0');
      return '/assets/background-image/night.jpg';
    }
    return '';
  }

}
