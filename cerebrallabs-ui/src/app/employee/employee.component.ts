import { Component } from "@angular/core";
import { IEmployee } from "./employee.model";
import { EmployeeDetailComponent } from "./employee-detail.component";

@Component({
    templateUrl: "./employee.component.html",
    styleUrl: "./employee.component.scss",
    selector: "cl-employee"

})
export class EmployeeComponent{
   employees : IEmployee[] = [];
   firstName : string = "Kwame";
   lastName : string = "Apraku";
   constructor(){
    this.employees = [
      {
        firstName : "tom",
        lastName : "harry"
      },
      {
        firstName :"rick",
        lastName : "ross"
      }
    ]
    }
    addEmployee(){
      let newEmployee : IEmployee = {
        firstName : this.firstName,
        lastName : this.lastName
      }
      this.employees.push(newEmployee);
    }
}
