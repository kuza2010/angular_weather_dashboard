import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppCityService } from 'src/app/services/city-service';
import { CityModel } from 'src/app/models/city-model';
import { element } from 'protractor';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public selectControl = new FormControl();
  public citiesList: String[] = new Array(0);

  constructor(private cityService: AppCityService) { }

  ngOnInit(): void {
    this.cityService.getCityJSON()
      .then(cities => {
        console.log(`successful fetch ${cities.length}`);
        cities.forEach(element => {
          if (this.citiesList.length === undefined || this.citiesList.length < 10) {
            console.log("add");
            this.citiesList.push(element.name);
          }
        })
      })
      .catch(reason => {
        console.error("Error during fetch city json: " + reason)
        alert("Please reload page :)")
      });

    this.selectControl.valueChanges
      .subscribe((city: string) => {
        const obj = this.citiesList.find(item => item === city);
        console.log('subscriptionTypeId', city, obj);
      });
  }
}
