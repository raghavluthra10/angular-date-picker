import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DateOneComponent } from "./date-one/date-one.component";
import { DatePickerComponent } from "./date-picker/date-picker.component";
import { SyncfusionComponent } from "./syncfusion/syncfusion.component";

const routes: Routes = [
  { path: "dalelotts", component: DatePickerComponent },
  { path: "kendo-date-picker", component: DateOneComponent },
  { path: "syncfusion", component: SyncfusionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
