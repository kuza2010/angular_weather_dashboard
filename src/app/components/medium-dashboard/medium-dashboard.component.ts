import { Component, OnInit } from "@angular/core";
import { WeatherServiceService } from '../../services/weather-service.service'

import { ImageUtils } from '../../services/image-utils'
import { Resolution } from '../../services/image-utils'
import { CookieHelperService, CookieKey } from 'src/app/services/cookie-helper.service';

@Component({
  selector: "app-medium-dashboard",
  templateUrl: "./medium-dashboard.component.html",
  styleUrls: ["./medium-dashboard.component.css"]
})
export class MediumDashboardComponent implements OnInit {

  readonly numOf = 5;

  weatherInfo: Array<MediumDashboardModel> = [];

  constructor(private weatherServise: WeatherServiceService,
    private cookieService: CookieHelperService) { }

  ngOnInit(): void {
    // we use weatherServise.getWeatherForWeek(), because api support only
    // this method for free tiere
    this.weatherServise.getWeatherForWeek(this.getCity())
      .then(weather => { this.fillHourlyWeather(weather.list) })
      .catch(reason => {
        console.error("Exception: " + reason);
        alert("Something went wrong! Please, relaod page :)");
      })
  }


  private fillHourlyWeather(list: List[]) {
    list.forEach(element => {

      if (this.weatherInfo.length < this.numOf)
        this.weatherInfo.push(new MediumDashboardModel(
          new Date(element.dt * 1000), element.weather[0].id,
          element.main.temp_min, element.main.temp_max))

    })
  }

  private getCity() {
    if (this.cookieService.check(CookieKey.cityId))
      return this.cookieService.get(CookieKey.cityId);
    return undefined;
  }
}


class MediumDashboardModel {
  public image: string;
  public averageTemperature: number;

  constructor(public time: Date, weatherConditionCode: number,
    minTemperature: number, maxTemperature: number) {

    // average
    this.averageTemperature = Math.round(Math.abs(minTemperature) + ((maxTemperature) - Math.abs(minTemperature)) / 2);
    this.image = ImageUtils.getImagePath(weatherConditionCode, Resolution.Large);
  }
}
