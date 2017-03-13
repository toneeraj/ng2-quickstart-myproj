import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { AddressComponent } from './address.component';

import { DataService } from './data.service';
import { LoggerService } from './logger.service';

//Follwoing is only for the development
import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

//This is decorator not officially available in javascript yet
//describes the class AppModule.
@NgModule({
  imports: [BrowserModule, // what stuffs do i need?
  FormsModule, 
  HttpModule,
  InMemoryWebApiModule.forRoot(InMemoryDataService)], //Only for dev server. WIll help use HTTP without actual HTTP
  declarations: [AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    AddressComponent
  ], //what things are in my app
  providers: [DataService, LoggerService], //For services
  bootstrap: [AppComponent]  // where do i start?
})
export class AppModule { }