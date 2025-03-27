import { NgModule } from "@angular/core";
import { EmployeeComponent } from "./employee.component";
import { CommonModule } from "@angular/common";
import { EmployeeDetailComponent } from "./employee-detail.component";

@NgModule({
   declarations:[EmployeeComponent, EmployeeDetailComponent],
   imports: [CommonModule],
   exports:[EmployeeComponent, EmployeeDetailComponent]
})
export class EmployeeModule{

}