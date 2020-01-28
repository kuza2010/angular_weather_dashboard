import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service'

@Component({
  selector: 'app-big-dashboard',
  templateUrl: './big-dashboard.component.html',
  styleUrls: ['./big-dashboard.component.css']
})
export class BigDashboardComponent implements OnInit {

  temperature: number
  description: string
  humidity: number
  windSpeed: number;


  constructor(private weatherServise: WeatherServiceService) {
  }

  ngOnInit() {
    this.weatherServise.getWeatherForToday()
      .then(weather => {
        this.temperature = Math.floor(weather.main.temp)
        this.description = weather.weather[0].description
        this.windSpeed = weather.wind.speed
        this.humidity = weather.main.humidity;
      })
      .catch(reason => {
        console.log('Oops...')
      });
  }

}