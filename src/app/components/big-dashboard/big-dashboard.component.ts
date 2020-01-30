import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service'

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
          weather.weather[0].id,
          Math.round(weather.main.feels_like),
          Math.round(weather.main.temp_max),
          Math.round(weather.main.temp_min),
          weather.weather[0].main,
          weather.main.humidity,
          Math.round(weather.wind.speed))
      })
      .catch(reason => {
        //TODO: popup
        console.log('Oops...')
      });
  }
}


class BigDashboardModel {

  public img: string;

  constructor(public currentTemperature: number,
    weatherConditionCode: number,
    public feelsLikeTemperature: number,
    public maxTemperature: number,
    public minTemperature: number,
    public description: string,
    public humidity: number,
    public windSpeed: number) {

    this.img = this.getImagePath(weatherConditionCode);
  }


  getImagePath(code: number) {
    let defaultPath = "../../../assets/assets/weathet-conditions/default_96x96.png";

    switch (Math.floor(code / 100)) {
      case 2:
        return "../../../assets/weathet-conditions/group_2xx_96x96.png";
      case 3:
        return "../../../assets/weathet-conditions/group_3xx_96x96.png";
      case 5: {
        if (code === 511) return "../../../assets/weathet-conditions/5xx/freezing_rain_96x96.png";
        else if (code <= 504) return "../../../assets/weathet-conditions/5xx/light-exteme_rain96x96.png";
        else return "../../../assets/weathet-conditions/5xx/light_intensity-ragged_shower96x96-.png"
      }
      case 6: return "../../../assets/weathet-conditions/group_6xx_96x96.png";
      case 7: return "../../../assets/weathet-conditions/group_7xx_96x96.png";
      case 8: {
        if (code === 800) return "../../../assets/weathet-conditions/8xx/clear_sky96_96.png";
        else if (code === 802) return "../../../assets/weathet-conditions/8xx/scattered_clouds96x96.png";
        else if (code === 801) return "../../../assets/weathet-conditions/8xx/few_clouds96x96.png";
        else return "../../../assets/weathet-conditions/8xx/overcast_clouds96x96.png";
      }
      default: return defaultPath;
    }
  }

}