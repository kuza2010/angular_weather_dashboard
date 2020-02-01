import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service'

import { ImageUtils } from '../../services/image-utils'
import { Resolution } from '../../services/image-utils'

@Component({
  selector: 'app-big-dashboard',
  templateUrl: './big-dashboard.component.html',
  styleUrls: ['./big-dashboard.component.css']
})
export class BigDashboardComponent implements OnInit {

  weatherInfo: BigDashboardModel;

  constructor(private weatherServise: WeatherServiceService) { }

  ngOnInit() {
    this.weatherServise.getWeatherForToday()
      .then(weather => {
        this.weatherInfo = new BigDashboardModel(Math.round(weather.main.temp),
          Math.round(weather.main.feels_like),
          Math.round(weather.main.temp_max),
          Math.round(weather.main.temp_min),
          weather.weather[0].main,
          weather.main.humidity,
          Math.round(weather.wind.speed),
          weather.weather[0].id)
      })
      .catch(reason => {
        //TODO: popup
        alert("Something went wrong! Please, relaod page :)")
      });
  }
}


class BigDashboardModel {

  public img: string;

  constructor(public currentTemperature: number,
    public feelsLikeTemperature: number,
    public maxTemperature: number,
    public minTemperature: number,
    public description: string,
    public humidity: number,
    public windSpeed: number,
    weatherConditionCode: number) {

    this.img = ImageUtils.getImagePath(weatherConditionCode, Resolution.Large);
  }

}