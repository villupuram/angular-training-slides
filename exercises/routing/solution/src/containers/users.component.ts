import {Component} from '@angular/core';
import Users from '../services/users.service';

@Component({
  selector: 'users-home',
  template: 'Users List Home Route'
})
export class UsersHome {}

@Component({
  selector: 'rio-root',
  styleUrls: [require(`../app/app.css`)],
  template: `
  <div style="border: 1px solid black; padding: 10px; display: flex">
    <div style="width: 40%;">
      <user-list [users]="users"></user-list>
    </div>
    <div style="flex: 1">
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
export class UsersContainer {
  public users: any;

  constructor(private usersService: Users) {}

  ngOnInit() {
   this.users = this.usersService.getUserNames();
  }
}