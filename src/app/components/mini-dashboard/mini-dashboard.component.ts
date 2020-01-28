import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mini-dashboard",
  templateUrl: "./mini-dashboard.component.html",
  styleUrls: ["./mini-dashboard.component.css"]
})
export class MiniDashboardComponent {
  public days: string[] = ["Wednesday", "Thursday", "Friday", "Saturday"];
}
