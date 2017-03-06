import { Component } from '@angular/core';//importing the decorator which I need

//Using the decorator by the name @Component. 
@Component({
  selector: 'my-app', //this is what that will be shown in the html tag. it is like css selector as in jquery.
  template: `
    <h1>{{name}}</h1>
       
    <p><i>{{name}}</i> is in {{region}} region.</p>
    
    <br/>
    <button (click)="addressClick()">Show/Hide address</button>

    <div [hidden]="hideAddress">
    <fieldset>
      <label>Street:</label>{{street}}
    </fieldset>
    <fieldset>
      <label>City:</label>{{city}}
    </fieldset>
    <fieldset>
      <label>Region:</label>
        <select (change)="regionChange($event.target.value)" >
          <option>East</option>
          <option>South</option>
          <option>North</option>
          <option>West</option>
        </select>
    </fieldset>
    </div>
    
    `,
})
export class AppComponent  {
  name = 'Alexa';
  street = 'second street';// by default it is a public property.
  city = 'Anytown';
  region = '';
  hideAddress = false;

  //toggles hideAddress property
  addressClick() {
    this.hideAddress == false ? this.hideAddress = true : this.hideAddress = false;
  }

  regionChange(region:string) {
    this.region = region;
  }
}