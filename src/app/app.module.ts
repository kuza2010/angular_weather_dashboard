import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { Routes, RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainBoardComponent } from "./components/main-board/main-board.component";
import { BigDashboardComponent } from "./components/big-dashboard/big-dashboard.component";
import { MiniDashboardComponent } from "./components/mini-dashboard/mini-dashboard.component";
import { MediumDashboardComponent } from "./components/medium-dashboard/medium-dashboard.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { NotFoundComponent } from './components/not-found/not-found.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SelectDropDownModule } from 'ngx-select-dropdown'

import { CookieService } from 'ngx-cookie-service';


const appRoutes: Routes = [
  { path: '', component: MainBoardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBoardComponent,
    BigDashboardComponent,
    MiniDashboardComponent,
    MediumDashboardComponent,
    SettingsComponent,
    NotFoundComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    SelectDropDownModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
