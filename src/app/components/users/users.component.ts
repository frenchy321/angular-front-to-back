import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('userForm') form: any;

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


  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid){
      console.log('form is not valid')
    }else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);

      this.form.reset();  
    }
  }
}
