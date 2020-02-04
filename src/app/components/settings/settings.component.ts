import { Component, OnInit } from '@angular/core';
import { AppCityService } from 'src/app/services/city-service';
import { CookieService } from 'ngx-cookie-service';
import { CityModel } from 'src/app/models/city-model';
import { CookieHelperService, CookieKey } from 'src/app/services/cookie-helper.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  //Configure ngx-select-dropdown search
  public ngx_select_config = {
    displayKey: 'name:',
    search: true,
    limitTo: 5,
    placeholder: 'Your city:',
    noResultsFound: 'Are you from Mars?',
    clearOnSelection: true
  };

  public singleSelect: CityModel;
  public citiesList: CityModel[] = [];

  constructor(private cityService: AppCityService,
    private cookieService: CookieHelperService) { }

  ngOnInit(): void {
    // need filter because json maight contain some invalid data
    this.cityService.getCityJSON()
      .then(citiesFromJson => this.citiesList = [...citiesFromJson.filter(city => this.isValid(city))])
      .catch(reason => { alert("Please reload page :)") });
  }

  private isValid(city: CityModel) {
    return city["name:"] && city["name:"].trim().length > 1;
  }

  changeCity() {
    if (this.singleSelect) {
      console.log(`update cookies...`);
      this.cookieService.set(CookieKey.cityName, this.singleSelect["name:"]);
      this.cookieService.set(CookieKey.cityId, this.singleSelect.id.toString());
    } else {
      console.log("clear cookies...");
      this.cookieService.clear(CookieKey.cityName, CookieKey.cityId);
    }
  }
}
