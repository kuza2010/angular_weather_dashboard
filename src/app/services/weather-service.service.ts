import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WeatherServiceService {
  constructor(private http: HttpClient) {}

  getWeatherForToday() {
    return this.http
      .get<TodayWeather>(
        "https://api.openweathermap.org/data/2.5/weather?id=520555&units=metric&appid=c0518767fddc232f44a8ac2096774f84"
      )
      .toPromise();
  }
}
