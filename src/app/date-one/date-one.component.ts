import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-date-one",
  templateUrl: "./date-one.component.html",
  styleUrls: ["./date-one.component.css"],
})
export class DateOneComponent implements OnInit {
  value: Date = new Date(2000, 2, 10);
  constructor() {}

  ngOnInit() {}
}
