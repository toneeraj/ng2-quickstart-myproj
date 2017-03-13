import { Component, OnInit } from '@angular/core';//importing the decorator which I need

import { Customer } from './model';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

// Using the decorator by the name @Component. 
@Component({
  moduleId: module.id,
  selector: 'customer-list', //this is what that will be shown in the html tag. it is like css selector as in jquery.
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[]; //declared
  customer: Customer; //selected customer
  isBusy = false;
  
  constructor(private dataService: DataService, private loggerService: LoggerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.isBusy = true;
    this.loggerService.log('Getting customers...');
    //Using promise.
    //this.dataService.getCustomersP().then ( custs => {
    
    //Using Observable
      this.dataService.getCustomers().subscribe( custs => {
      this.isBusy = false;
      this.customers = custs;
    }, (errorMsg: string) => {
      this.isBusy = false;
      alert(errorMsg); //TODO : never do an alert
    });
  }


  // gets a +1 or -1 as argument and tries to set the current selected customer index with +1 or -1
  shift(increment: number) {
    let ix = this.customers.findIndex(c => c === this.customer) + increment;
    //Used to handle - when we are in the beginning and user clicks previous or we are in the end  and user clicks next.
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));
    this.customer = this.customers[ix];
  }

}