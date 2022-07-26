import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DateOneComponent } from "./date-one/date-one.component";
import { DatePickerComponent } from "./date-picker/date-picker.component";

const routes: Routes = [
  { path: "dalelotts", component: DatePickerComponent },
  { path: "kendo-date-picker", component: DateOneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
