import { EmployeeserviceService } from './employeeservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Root app</h1> <app-employeedetails></app-employeedetails> <app-employeelist></app-employeelist>',
  styleUrls: ['./app.component.css'],
  providers:[EmployeeserviceService]
})
export class AppComponent {
  title = 'app';
}
