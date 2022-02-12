import { Component, Input } from '@angular/core';
import { Day } from 'src/app/models/day';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent  {
  @Input() detail:Day={
    maxtemp_c: 0,
    maxtemp_f: 0,
    mintemp_c: 0,
    mintemp_f: 0,
    avgtemp_c: 0,
    avgtemp_f: 0,
    maxwind_mph: 0,
    maxwind_kph: 0,
    totalprecip_mm: 0,
    totalprecip_in: 0,
    avgvis_km: 0,
    avgvis_miles: 0,
    avghumidity: 0,
    daily_will_it_rain: 0,
    daily_chance_of_rain: 0,
    daily_will_it_snow: 0,
    daily_chance_of_snow: 0,
    condition:{} as any ,
    uv: 0
  };
}
