import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../models/User';

@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
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
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next({ name: 'Andy' });
      }, 5000);
    });
    return this.data;
  }
  getUsers(): Observable<User[]> {
    console.log('fetching ...');
    return of(this.users);
  }
  addUser(user: User) {
    this.users.unshift(user);
  }
}
