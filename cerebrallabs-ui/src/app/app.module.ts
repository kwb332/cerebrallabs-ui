import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { EmployeeModule } from "./employee/employee.module";
import { EmployeeComponent } from "./employee/employee.component";
import { CommonModule } from "@angular/common";



@NgModule({
  declarations: [HomeComponent],
  imports : [RouterModule, EmployeeModule],
  exports :[HomeComponent]}
)

export class AppModule{

}
