import { Component, Input } from '@angular/core';
import { Astro } from 'src/app/models/astro';
import { Day } from 'src/app/models/day';
import { Forecastday } from 'src/app/models/forecastday';
import { Hour } from 'src/app/models/hour';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent  {

  
  display=false;
  @Input() day:Forecastday={ 
    date: '',
    date_epoch: 0,
    day: {} as Day,
    astro: {} as Astro,
    hour: {} as Hour[]
  };

  async onCardClick(){
       this.display=!this.display;
  }

}

