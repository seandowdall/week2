import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do';
  thingsToDo = [
    'Learn Javascript',
    'Learn Angular',
    'Learn Redux',
    'Name: Sean Dowdall, Student No: s00210945'
  ];
  thingsCompleted = [];

  summary():string {
    return`${this.thingsToDo.length} to do / ${this.thingsCompleted.length} done`;
  }
  constructor() {
    setInterval(() => {
      this.thingsToDo.push('make coffee');
    }, 1000);
  }
}
