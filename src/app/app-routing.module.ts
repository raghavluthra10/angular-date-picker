import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DatePickerComponent } from "./date-picker/date-picker.component";

const routes: Routes = [
  { path: "date-picker", component: DatePickerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
