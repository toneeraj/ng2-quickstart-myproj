import { Component, EventEmitter, Input, Output } from '@angular/core';//importing the decorator which I need

import { Customer } from './model';

// Using the decorator by the name @Component. 
@Component({
  moduleId:module.id,
  selector: 'customer-detail', //this is what that will be shown in the html tag. it is like css selector as in jquery.
  templateUrl: 'customer-detail.component.html'
})
export class CustomerDetailComponent  {

  showAddress = true;
  @Input() customer : Customer;
  @Output() shift = new EventEmitter<number>();

  right() {
    this.shift.emit(1);
  }

  left () {
    this.shift.emit(-1);
  }
}