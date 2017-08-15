import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import {TemplatedrivenformComponent} from './templatedrivenform/templatedrivenform.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    TemplatedrivenformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
