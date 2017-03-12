import { Component } from '@angular/core';//importing the decorator which I need

import { Customer } from './model';

// Using the decorator by the name @Component. 
@Component({
  moduleId:module.id,
  selector: 'customer-list', //this is what that will be shown in the html tag. it is like css selector as in jquery.
  templateUrl: 'customer-list.component.html',
  styleUrls :['customer-list.component.css']
})
export class CustomerListComponent  {

  customers: Customer[] = [
    {
      id: 1,
      name: 'Alex Smith',
      address: {
        street: '123 Main Street',
        city: 'Anytown',
        state: 'California',
        region: 'West'
      }
    },
    {
      id: 2,
      name: 'Pierre Pasmal',
      address: {
        street: '456 Rue de Main',
        city: 'Quebec City',
        state: 'Quebec',
        region: 'East'
      }
    },
    {
      id: 3,
      name: 'Margarita Nadie',
      address: {
        street: '789 Calle Principal',
        city: 'Guadalajara',
        state: 'Jalisco',
        region: 'South'
      }
    },
    {
      id: 4,
      name: 'Katie O\'Leary',
      address: {
        street: '137 DeKoven Street',
        city: 'Chicago',
        state: 'Illinois',
        region: 'Midwest'
      }
    }
  ];

  customer : Customer; //selected customer

  // gets a +1 or -1 as argument and tries to set the current selected customer index with +1 or -1
  shift(increment : number) {
    let ix = this.customers.findIndex( c => c ===this. customer) + increment;
    //Used to handle - when we are in the beginning and user clicks previous or we are in the end  and user clicks next.
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));
    this.customer = this.customers[ix];
  }

}