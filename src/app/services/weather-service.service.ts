import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WeatherServiceService {
  private readonly baseUrl = "https://api.openweathermap.org/data/2.5";
  private readonly defaultCityId = "520555";
  private readonly units = "metric";
  private readonly appid = "c0518767fddc232f44a8ac2096774f84";

  constructor(private http: HttpClient) { }


  /**
   * Return the weather for specified cityId on today.
   * If the value is not specify will be use default value 52055
   * for NN city.
   *
   * @param cityId - cityId
   */
  getWeatherForToday(cityId: string = this.defaultCityId) {
    let parameters: HttpParams = new HttpParams();
    parameters = parameters.set("id", cityId);
    parameters = parameters.append("units", this.units);
    parameters = parameters.append("appid", this.appid);

    return this.http
      .get<TodayWeather>(this.baseUrl + "/weather", { params: parameters })
      .toPromise();
  }

  /**
   * Return the weather for specified cityId on week.
   * If the value is not specify will be use default value 52055
   * for NN city. 
   * 
   * @param cityId - cityId
   */
  getWeatherForWeek(cityId: string = this.defaultCityId) {
    let parameters: HttpParams = new HttpParams();
    parameters = parameters.set("id", cityId);
    parameters = parameters.append("units", this.units);
    parameters = parameters.append("appid", this.appid);

    return this.http
      .get<TodayWeather>(this.baseUrl + "/forecast", { params: parameters })
      .toPromise();
  }
}
