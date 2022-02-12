import { Component, Input } from '@angular/core';
import { Current } from 'src/app/models/current';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent {
  @Input() current:Current={
    last_updated_epoch:0,
    last_updated: '',
    temp_c: 0,
    temp_f: 0,
    is_day: 0,
    condition:{} as any,
    wind_mph: 0,
    wind_kph: 0,
    wind_degree: 0,
    wind_dir: '',
    pressure_mb: 0,
    pressure_in: 0,
    precip_mm:0,
    precip_in: 0,
    humidity: 0,
    cloud: 0,
    feelslike_c: 0,
    feelslike_f: 0,
    vis_km: 0,
    vis_miles: 0,
    uv: 0,
    gust_mph: 0,
    gust_kph: 0,
  };
  @Input() city:string='';
}
