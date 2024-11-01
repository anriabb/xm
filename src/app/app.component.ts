import { Component } from '@angular/core';
import { ParentUser } from './parent-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnriAbuladze';

  firstUsers = [
    { firstname: 'Jimmy', lastname: 'Page', age: 25 },
    { firstname: 'John', lastname: 'Bonham', age: 30 },
    { firstname: 'John', lastname: 'Jones', age: 35 },
    { firstname: 'Robert', lastname: 'Plant', age: 40 },
    { firstname: 'Anri', lastname: 'Abuladze', age: 19 }
  ];

  users: ParentUser[] = [
    { id: 1, firstname: 'Jimmy', lastname: 'Page', dateOfBirth: new Date(1995, 4, 23), phoneNumber: '123456789', email: 'page@zeppelin.com' },
    { id: 1, firstname: 'John', lastname: 'Bonham', dateOfBirth: new Date(1987, 4, 23), phoneNumber: '123456789', email: 'bonham@zeppelin.com' },
    { id: 1, firstname: 'Robert', lastname: 'Plant', dateOfBirth: new Date(1954, 4, 23), phoneNumber: '123456789', email: 'plant@zeppelin.com' },
    { id: 1, firstname: 'John', lastname: 'Jones', dateOfBirth: new Date(1956, 4, 23), phoneNumber: '123456789', email: 'jones@zeppelin.com' },
    { id: 1, firstname: 'Anri', lastname: 'Abuladze', dateOfBirth: new Date(1975, 4, 23), phoneNumber: '123456789', email: 'abuladze@zeppelin.com' }
  ];

}
