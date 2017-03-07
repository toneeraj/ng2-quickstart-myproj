import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';

//This is decorator not officially available in javascript yet
//describes the class AppModule.
@NgModule({
  imports:      [ BrowserModule, FormsModule ], // what stuffs do i need?
  declarations: [ AppComponent ], //what things are in my app
  bootstrap:    [ AppComponent ]  // where do i start?
})
export class AppModule { }
