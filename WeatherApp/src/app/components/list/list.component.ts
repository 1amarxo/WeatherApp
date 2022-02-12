import { Component } from '@angular/core';
import { Current } from 'src/app/models/current';
import { Location } from 'src/app/models/location';
import { Forecastday } from 'src/app/models/forecastday';
import { WeatherDbService } from 'src/app/services/weather-db.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  display=false;
  city:string='';
  forecastDay:Forecastday[]=[];

  location:Location={      
    name: '',
    region:'',
    country: '',
    lat: 0,
    lon: 0,
    tz_id: '',
    localtime_epoch:0,
    localtime:'',
  };
  current:Current={    
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

  constructor(private _weatherDbService: WeatherDbService) { }

  async onSearch(cityName:string): Promise<void>{

    let result =await this._weatherDbService.SearchCity(cityName);
    this.display=!this.display;
    this.city=cityName;
    this.current=result.current;
    this.location=result.location;
    this.forecastDay=result.forecast.forecastday;
    
    
  }
}
