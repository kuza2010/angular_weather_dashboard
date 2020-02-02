import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityModel } from '../models/city-model';

@Injectable({
    providedIn: "root"
})
export class AppCityService {

    constructor(private http: HttpClient) { }

    public getCityJSON(): Promise<CityModel[]> {
        return this.http
            .get<CityModel[]>("../assets/city-list/cities.json")
            .toPromise();
    }
}