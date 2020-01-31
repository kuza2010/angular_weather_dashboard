import { Component, OnInit } from "@angular/core";
import { WeatherServiceService } from '../../services/weather-service.service'


@Component({
  selector: "app-mini-dashboard",
  templateUrl: "./mini-dashboard.component.html",
  styleUrls: ["./mini-dashboard.component.css"]
})
export class MiniDashboardComponent implements OnInit {

  public days: string[] = ["Wednesday", "Thursday", "Friday", "Saturday"];

  constructor(private weatherServise: WeatherServiceService) { }

  ngOnInit() {
    this.weatherServise.getWeatherForWeek()
      .then(weather => {
        weather.list.forEach(element => {
          console.log(element.dt);
          console.log("date:" + new Date(element.dt));
        })
      })
      .catch(reason => {
        //TODO: popup
        alert("Something went wrong! Please, relaod page :)")
      });
  }
}
