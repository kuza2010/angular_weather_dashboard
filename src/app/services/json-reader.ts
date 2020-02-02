import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ 
    providedIn: "root" 
})
export class AppCitiesService {

    constructor(private http: HttpClient) { }

    public getCityJSON(): Promise<any> {
        return this.http
            .get("../assets/city-list/city.list.json")
            .toPromise();
    }
}