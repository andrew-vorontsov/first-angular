import { Injectable } from '@angular/core';
import { Constants } from 'common/constants';
import { Person } from '../users/person.module';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public auth = false;

  public user: Person = {
    id: -1,
    firstname: '',
    lastname: '',
  };

  public personsStatic = new Constants();

  private changeUserName(name) {
    this.user.firstname = name;
    return this.user.firstname;
  }

  private createToken(): string {
    const token = Math.round(Math.random() * 1000);
    return token.toString();
  }

  public getUserInfo(name): Person {
    if (name) {
      const person = this.personsStatic.persons.find(
        user => user.firstname === name.toLowerCase()
      );
      return person;
    }
  }

  public isAuthenticated() {
    if (localStorage.getItem('token')) {
      this.auth = true;
      return this.auth;
    } else {
      return this.auth;
    }
  }

  public login(name) {
    if (!this.isAuthenticated() && this.getUserInfo(name)) {
      console.log('Login successful');
      localStorage.setItem('token', this.createToken());
      localStorage.setItem('userInfo', JSON.stringify(this.getUserInfo(name)));
      this.changeUserName(name);
      this.auth = true;
    } else {
      alert('Введите имя из списка пользователей (Bob, Maria, Habib)');
    }
  }

  public logout() {
    if (this.isAuthenticated()) {
      console.log('Logout');
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
      this.auth = false;
      this.user.firstname = '';
    }
  }
}
