import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  getWeather(city) {
	  let weather = this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&&appid=cb3504a8c159eef77586497ca2b81536`);
	  return weather;
  }
}

// http://api.openweathermap.org/data/2.5/weather?q=San%20Jose&units=imperial&&appid=cb3504a8c159eef77586497ca2b81536