import { Component, Input } from '@angular/core';//importing the decorator which I need

import { Address } from './model';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

// Using the decorator by the name @Component. 
@Component({
  moduleId: module.id,
  selector: 'address-comp', //this is what that will be shown in the html tag. it is like css selector as in jquery.
  templateUrl: 'address.component.html'
})
export class AddressComponent {
  regions = ['East', 'South', 'North', 'West', 'Midwest'];
  //states = ['California', 'Quebec', 'Jalisco', 'West', 'Illinois'];
  states: string[]; 
  showAddress = true;
  isBusy = false;

  //@Input() customer : Customer;
  @Input() address: Address;

  constructor(private dataService: DataService, private loggerService: LoggerService) { }

  ngOnInit() {
    this.getStates();
  }

  getStates() {
    this.isBusy = true;
    this.loggerService.log('Getting states...');
    
    //Using Observable
      this.dataService.getStates().subscribe( states => {
      this.isBusy = false;
      this.states = states;
    }, (errorMsg: string) => {
      this.isBusy = false;
      alert(errorMsg); //TODO : never do an alert
    });
  }
}