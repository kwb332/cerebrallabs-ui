import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppModule } from './app.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeModule } from './employee/employee.module';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [AppModule, EmployeeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cerebrallabs-ui';
}
