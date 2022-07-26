import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-date-one",
  templateUrl: "./date-one.component.html",
  styleUrls: ["./date-one.component.css"],
})
export class DateOneComponent implements OnInit {
  value: Date = new Date();
  constructor() {}

  ngOnInit() {}

  disabledDates = (date: Date): boolean => {
    return date.getDate() % 2 === 0;
  };
}
