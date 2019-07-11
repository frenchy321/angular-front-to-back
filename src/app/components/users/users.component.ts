import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.co.uk',
        isActive: true,
        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevinjohnson@hotmail.co.uk',
        isActive: false,
        registered: new Date('03/11/2019 09:30:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Lomas',
        email: 'karenlomas@gmail.com',
        isActive: true,
        registered: new Date('04/10/2018 08:30:00'),
        hide: true
      }
    ];
    this.loaded = true;
  }

  // addUser() {
  //   this.user.registered = new Date();
  //   this.user.isActive = true;

  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   };
  // }

  onSubmit(e) {
    console.log('123');
    e.preventDefault();
  }
}
