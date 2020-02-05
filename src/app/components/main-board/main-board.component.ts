import { Component, OnInit } from '@angular/core';
import { CookieHelperService, CookieKey } from 'src/app/services/cookie-helper.service';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {

  public readonly DEFAULT_CITY = 'Nizhniy Novgorod';
  public city: string;

  constructor(private cookieService: CookieHelperService) { }

  ngOnInit() {
    if (this.cookieService.check(CookieKey.cityName))
      this.city = this.cookieService.get(CookieKey.cityName);
    else {
      console.warn(`Use default city - ${this.DEFAULT_CITY}`)
      this.city = 'Nizhniy Novgorod';
    }
  }

}
