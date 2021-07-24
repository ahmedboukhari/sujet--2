import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sujet2';
  json='menu = [
    {
    name : 'Dropdown',
    submenus : [ {name :'Action'}],
    submenus : [ {name :'Another action'}],
    submenus : [ {name :'Something else here'}],
    }
    ]'
  fonction () : void {
    return (json)
  }
   