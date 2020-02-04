import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieHelperService {

  // TODO: It must be singleton
  constructor(private cookieService: CookieService) { }

  public set(key: CookieKey, value: string) {
    if (key && value && value != undefined && key != undefined) {
      console.log(`set cookie ${key}: ${value}`)
      this.cookieService.set(key, value);
    }
  }

  public get(key: CookieKey): string {
    if (key && key != undefined) {
      console.log(`request cookie ${key}: ${this.cookieService.get(key)}`)
      return this.cookieService.get(key);
    }
    return undefined;
  }

  public clearAll() {
    this.cookieService.deleteAll();
  }

  public clear(...cookies: CookieKey[]) {
    if (cookies != undefined && cookies) {
      for (let cookie of cookies)
        this.cookieService.check(cookie) ? this.cookieService.delete(cookie) : "";
    }
  }

}

export enum CookieKey {
  cityName = 'city',
  cityId = 'city_id'
}