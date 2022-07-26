import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-date-one",
  templateUrl: "./date-one.component.html",
  styleUrls: ["./date-one.component.css"],
})
export class DateOneComponent implements OnInit {
  format = "MM/dd/yyyy HH:mm";
  value: Date = new Date(2022, 7, 26, 21, 30);

  min: Date = new Date();
  max: Date = new Date(2022, 7, 26, 21, 10);
  disableStartTime: string = "";
  disableEndTime: string = "";
  // tempDate: any
  constructor() {}

  ngOnInit() {
    // here we set the date as per our demands.
    // for the sake of example, lets say 28th july to 30th july
    // this.min = new Date(2022, 7, 28, 17)
    console.log(this.value);
    console.log(
      "current: ",
      this.value.getHours(),
      ":",
      this.value.getMinutes()
    );
  }

  disabledDates: Date[] = [
    new Date(2022, 7, 21, 21, 30),
    new Date(2022, 7, 22, 21, 30),
    new Date(2022, 7, 23, 21, 30),
    new Date(2022, 7, 30, 21, 30),
    // new Date(2022, 7, 26),
    // new Date(2022, 7, 26),
    // new Date(2022, 7, 26),
  ];
}
