import { Component } from '@angular/core';//importing the decorator which I need

//Using the decorator by the name @Component. 
@Component({
  selector: 'my-app', //this is what that will be shown in the html tag. it is like css selector as in jquery.
  template: ` // accessing the property fo the class. The templates are fragments and not complete.
    <h1>{{name}}</h1>
    <fieldset>
      <img [src]="image" />
    </fieldset>
    <label [style.color]="color">Favorite Color:</label>{{color}}
    <button (click)="colorChange()">Toggle Color</button>
    <select (change)="colorChange($event.target.value)" >
      <option>red</option>
      <option>blue</option>
      <option>green</option>
    </select>
    `, 
})
export class AppComponent  {
  name = 'Alex Smith';// by default it is a public property.
  image = 'favicon.ico';
  color = 'red';

  clicked() {
    this.color = this.color == 'red' ? 'blue' : 'red';    
  }

  colorChange(color : string) {
    this.color = color;
  }
}
