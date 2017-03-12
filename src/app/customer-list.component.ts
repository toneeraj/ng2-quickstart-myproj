import { Component, OnInit } from '@angular/core';//importing the decorator which I need

import { Customer } from './model';
import { DataService } from './data.service';

// Using the decorator by the name @Component. 
@Component({
  moduleId:module.id,
  selector: 'customer-list', //this is what that will be shown in the html tag. it is like css selector as in jquery.
  templateUrl: 'customer-list.component.html',
  styleUrls :['customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[]; //declared
  customer : Customer; //selected customer

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.customers = this.dataService.getCustomers(); //assigned
  }


  // gets a +1 or -1 as argument and tries to set the current selected customer index with +1 or -1
  shift(increment : number) {
    let ix = this.customers.findIndex( c => c ===this. customer) + increment;
    //Used to handle - when we are in the beginning and user clicks previous or we are in the end  and user clicks next.
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));
    this.customer = this.customers[ix];
  }

}