import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RootObject } from '../models/root-object';

@Injectable({
  providedIn: 'root'
})


export class WeatherDbService {
  apiKey:string = 'f00ab710ac0b42f6b0c72119212210';

  constructor(private _httpClient:HttpClient){

  }
  
  async SearchCity(city:string):Promise<RootObject>{

    let urlPath:string='https://api.weatherapi.com/v1/forecast.json?key='+this.apiKey+'&q='+city+'&days=4';
    let result = await this._httpClient.get<RootObject>(urlPath).toPromise() as RootObject;

    return result;
  }
  
}
