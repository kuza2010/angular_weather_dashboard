import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppCityService } from 'src/app/services/city-service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  //Configure ngx-select-dropdown search
  public ngx_select_config = {
    search: true,
    limitTo: 5,
    placeholder: 'Your city:',
    noResultsFound: 'No city found! From Mars?',
    clearOnSelection: true
  };

  public singleSelect: string;
  public citiesList: String[] = new Array(0);

  constructor(private cityService: AppCityService) { }

  ngOnInit(): void {
    this.cityService.getCityJSON()
      .then(cities => {
        cities.forEach(city => {
          if (city["name:"] && city["name:"].trim().length > 1)
            this.citiesList.push(city["name:"])
        })
        this.citiesList = [...this.citiesList];
      })
      .catch(reason => { alert("Please reload page :)") });
  }

  changeCity() {
    console.log(this.singleSelect);
  }
}
