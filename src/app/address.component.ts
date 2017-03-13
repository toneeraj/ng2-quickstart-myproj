import { Component, Input } from '@angular/core';//importing the decorator which I need

import { Address } from './model';

// Using the decorator by the name @Component. 
@Component({
  moduleId: module.id,
  selector: 'address-comp', //this is what that will be shown in the html tag. it is like css selector as in jquery.
  templateUrl: 'address.component.html'
})
export class AddressComponent {
  regions = ['East', 'South', 'North', 'West', 'Midwest'];
  states = ['California', 'Quebec', 'Jalisco', 'West', 'Illinois'];
  showAddress = true;

  //@Input() customer : Customer;
  @Input() address: Address;

}