import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeserviceService {

  constructor() { }
  getEmployees() {
  return [{"name" :"mantu" ,id:"1", "age":25},
             {"name" :"biswa" ,id:"2", "age":24},
             {"name" :"siba" ,id:"3", "age":23}];
}

}
