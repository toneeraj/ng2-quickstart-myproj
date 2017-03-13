import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { AddressComponent } from './address.component';

import { DataService } from './data.service';
import { LoggerService } from './logger.service';

//This is decorator not officially available in javascript yet
//describes the class AppModule.
@NgModule({
  imports: [BrowserModule, FormsModule], // what stuffs do i need?
  declarations: [AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    AddressComponent
  ], //what things are in my app
  providers: [DataService, LoggerService], //For services
  bootstrap: [AppComponent]  // where do i start?
})
export class AppModule { }