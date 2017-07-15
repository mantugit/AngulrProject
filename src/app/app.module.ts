import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeedetailsComponent} from './employeedetails/employeedetails.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailsComponent,
    EmployeelistComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
