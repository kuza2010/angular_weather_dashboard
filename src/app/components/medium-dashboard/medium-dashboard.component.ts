import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-medium-dashboard",
  templateUrl: "./medium-dashboard.component.html",
  styleUrls: ["./medium-dashboard.component.css"]
})
export class MediumDashboardComponent {
  public hour: string[] = ["03:00", "06:00", "09:00", "12:00", "15:00"];
}
