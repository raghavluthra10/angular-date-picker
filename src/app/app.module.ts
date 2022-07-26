import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DatePickerComponent } from "./date-picker/date-picker.component";
import {
  DlDateTimeDateModule,
  DlDateTimePickerModule,
} from "angular-bootstrap-datetimepicker";
import { FormsModule } from "@angular/forms";
import { DateOneComponent } from "./date-one/date-one.component";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SyncfusionComponent } from "./syncfusion/syncfusion.component";
// import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    DateOneComponent,
    SyncfusionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    FormsModule,
    DateInputsModule,
    BrowserAnimationsModule,
    // DateTimePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
