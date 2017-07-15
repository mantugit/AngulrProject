import { EmployeeserviceService } from '../employeeservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
employees=[];
  constructor(private _employeeservice: EmployeeserviceService ) { }

  ngOnInit() {
  this.employees=this._employeeservice.getEmployees();
  }

}
