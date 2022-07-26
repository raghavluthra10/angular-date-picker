import { Component, OnInit } from "@angular/core";
// import { DpDatePickerModule } from "ng2-date-picker";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.css"],
})
export class DatePickerComponent implements OnInit {
  constructor() {}

  selectedDate: string = "";
  disableTimeStart: string = "5:30 am";
  disableTimeEnd: string = "7:30 am";

  ngOnInit() {}

  viewDate() {
    console.log(this.selectedDate);
  }
}
