import { EmployeeserviceService } from './employeeservice.service';
import { Component } from '@angular/core';
import {} from '';
@Component({
  selector: 'app-root',
  template: '<app-employeelist></app-employeelist>',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeserviceService]
})
export class AppComponent {
  title = 'app';
}
