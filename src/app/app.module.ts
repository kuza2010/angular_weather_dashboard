import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainBoardComponent } from "./components/main-board/main-board.component";
import { BigDashboardComponent } from "./components/big-dashboard/big-dashboard.component";
import { MiniDashboardComponent } from './components/mini-dashboard/mini-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBoardComponent,
    BigDashboardComponent,
    MiniDashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
