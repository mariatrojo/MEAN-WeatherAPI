import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
	city: string;
	weather: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
	// this.city = "San Jose";
	this.getTasksFromService();

	
  }

  getTasksFromService() {
    let observable = this._httpService.getWeather("San Jose");
	observable.subscribe(data => {
		console.log("Got our data", data);
		this.weather = data;
	})
}

}
// http://api.openweathermap.org/data/2.5/weather?q=San%20Jose&units=imperial&&appid=cb3504a8c159eef77586497ca2b81536