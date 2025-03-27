import { Component, Input } from '@angular/core';
import { IEmployee } from './employee.model';

@Component({
  selector: 'cl-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss'
})

export class EmployeeDetailComponent {
@Input() employee! : IEmployee;


}
