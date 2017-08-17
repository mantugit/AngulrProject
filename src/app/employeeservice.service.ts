import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/Http';
@Injectable()
export class EmployeeserviceService {

  constructor(private http:Http) { }
  getEmployees() {
  return [{
    "_id": "1",
    "username": "subhendu",
    "email": "subhendu@gmail.com",
    "password": "subhendu"
},{
    "_id": "2",
    "username": "vikash",
    "email": "vikash@gmail.com",
    "password": "vikash"
}];
}

}
