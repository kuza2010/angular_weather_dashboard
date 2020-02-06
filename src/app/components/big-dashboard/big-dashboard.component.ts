import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service'

import { ImageUtils } from '../../services/image-utils'
import { Resolution } from '../../services/image-utils'
import { CookieHelperService, CookieKey } from 'src/app/services/cookie-helper.service';

@Component({
  selector: 'app-big-dashboard',
  templateUrl: './big-dashboard.component.html',
  styleUrls: ['./big-dashboard.component.css']
})
export class BigDashboardComponent implements OnInit {

  weatherInfo: BigDashboardModel;

  constructor(private weatherServise: WeatherServiceService,
    private cookieService: CookieHelperService) { }

  ngOnInit() {
    this.weatherServise.getWeatherForToday(this.getCity())
      .then(weather => {
        this.weatherInfo = new BigDashboardModel(weather.main.temp,
          weather.main.feels_like,
          weather.main.temp_max,
          weather.main.temp_min,
          weather.weather[0].main,
          weather.main.humidity,
          weather.wind.speed,
          weather.weather[0].id)
      })
      .catch(reason => { alert("Something went wrong! Please, relaod page :)") });
  }

  private getCity() {
    if (this.cookieService.check(CookieKey.cityId))
      return this.cookieService.get(CookieKey.cityId);
    return undefined;
  }
}


class BigDashboardModel {

  public img: string;
  public minTemperature: number;
  public maxTemperature: number;
  public currentTemperature: number;
  public feelsLikeTemperature: number;
  public windSpeed: number;

  constructor(currentTemperature: number, feelsLikeTemperature: number,
    maxTemperature: number, minTemperature: number,
    public description: string, public humidity: number,
    windSpeed: number, weatherConditionCode: number) {

    this.img = ImageUtils.getImagePath(weatherConditionCode, Resolution.Large);
    this.currentTemperature = Math.round(currentTemperature);
    this.maxTemperature = Math.round(maxTemperature);
    this.minTemperature = Math.round(minTemperature);
    this.feelsLikeTemperature = Math.round(feelsLikeTemperature);
    this.windSpeed = Math.round(windSpeed);
  }

}