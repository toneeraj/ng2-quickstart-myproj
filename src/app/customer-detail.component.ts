import { Component, Input } from '@angular/core';//importing the decorator which I need

import { Customer } from './model';

// Using the decorator by the name @Component. 
@Component({
  moduleId:module.id,
  selector: 'customer-detail', //this is what that will be shown in the html tag. it is like css selector as in jquery.
  templateUrl: 'customer-detail.component.html'
})
export class CustomerDetailComponent  {

  regions = ['East', 'South', 'North', 'West', 'Midwest'];
  states = ['California', 'Quebec', 'Jalisco', 'West', 'Illinois'];
  showAddress = true;
  
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

  @Input() customer : Customer;


}