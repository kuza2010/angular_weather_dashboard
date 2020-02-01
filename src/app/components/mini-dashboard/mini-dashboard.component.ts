import { Component, OnInit } from "@angular/core";
import { WeatherServiceService } from '../../services/weather-service.service'

import { ImageUtils } from '../../services/image-utils'
import { Resolution } from '../../services/image-utils'

@Component({
  selector: "app-mini-dashboard",
  templateUrl: "./mini-dashboard.component.html",
  styleUrls: ["./mini-dashboard.component.css"]
})
export class MiniDashboardComponent implements OnInit {

  public readonly days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  readonly numOfDays = 4;

  weekWeatherInfo: Array<MiniDashboardModel> = [];

  constructor(private weatherServise: WeatherServiceService) { }

  ngOnInit() {
    this.weatherServise.getWeatherForWeek()
      .then(weather => { this.fillWeather(weather.list) })
      .catch(reason => {
        console.exception("Exception: " + reason);
        alert("Something went wrong! Please, relaod page :)");
      });
  }


  fillWeather(listWeather: List[]) {
    listWeather.forEach(element => {

      if (this.weekWeatherInfo.length < this.numOfDays) {
        let today = this.days[new Date(Date.now()).getDay()];                // current day
        let elementDay = this.days[new Date(element.dt * 1000).getDay()];    // current element day

        // we must get the weather from next day
        if (today != elementDay) {
          let last = this.weekWeatherInfo.slice(-1)[0];                      // get last added day

          if (last === undefined || last.dayName != elementDay)
            this.weekWeatherInfo.push(new MiniDashboardModel(
              elementDay, element.weather[0].id,
              element.main.temp_min, element.main.temp_max));
        }
      }
    });
  }
}



class MiniDashboardModel {
  public dateString: string;
  public dayName: string;
  public image: string;
  public minTemperature: number;
  public maxTemperature: number;

  constructor(dayName: string, weatherConditionCode: number,
    minTemperature: number, maxTemperature: number) {

    this.dayName = dayName;
    this.image = ImageUtils.getImagePath(weatherConditionCode, Resolution.Large);
    this.minTemperature = Math.round(minTemperature);
    this.maxTemperature = Math.round(maxTemperature);
  }
}
