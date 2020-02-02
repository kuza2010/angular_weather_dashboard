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

import { NgxSelectModule } from 'ngx-select-ex';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: '', component: MainBoardComponent },
  { path: 'settings', component: SettingsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBoardComponent,
    BigDashboardComponent,
    MiniDashboardComponent,
    MediumDashboardComponent,
    SettingsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
