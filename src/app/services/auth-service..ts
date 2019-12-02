import { Injectable } from '@angular/core';
import { Constants } from 'common/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public auth = false;
  public personsStatic = new Constants();

  private createToken(): number {
    const token = Math.round(Math.random() * 1000);
    return token;
  }

  private checkUserName(name) {
    if (name) {
      const userName = this.personsStatic.persons.find(
        user => user.firstname === name.toLowerCase()
      );
      return userName;
    }
  }

  public getUserInfo() {
    if (this.isAuthenticated()) {

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
    if (!this.isAuthenticated() && this.checkUserName(name)) {
      console.log('Login successful');
      localStorage.setItem('token', this.createToken().toString());
      this.auth = true;
    } else {
      console.log('Введите имя из списка пользователей');
    }
  }

  public logout() {
    if (this.isAuthenticated()) {
      console.log('Logout');
      localStorage.removeItem('token');
      this.auth = false;
    }
  }
}
