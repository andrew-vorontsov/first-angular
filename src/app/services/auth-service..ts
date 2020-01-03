import { Injectable } from '@angular/core';
import { persons } from 'common/constants';
import { Person } from '../users/person.module';
import { StorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private locStorage: StorageService) {}

  public auth = false;

  public user: Person = {
    id: -1,
    firstname: '',
    lastname: '',
  };

  public personsStatic = persons;

  private changeUserName(name) {
    this.user.firstname = name;
    return this.user.firstname;
  }

  public getUserInfo(name) {
    if (name) {
      const person = this.personsStatic.find(
        user => user.firstname === name.toLowerCase()
      );
      if (person) {
        return person.firstname;
      }
    }
  }

  public isAuthenticated() {
    if (this.locStorage.getLocStorage('token')) {
      this.auth = true;
      return this.auth;
    } else {
      return this.auth;
    }
  }

  public login(name) {
    if (!this.getUserInfo(name) || this.isAuthenticated()) {
      alert('Введите имя из списка пользователей (Bob, Maria, Habib)');
      return null;
    }
    console.log('Login successful');
    this.locStorage.setUserInfoToLocStorage(this.getUserInfo(name));
    this.locStorage.setTokenToLocStorage();
    this.changeUserName(name);
    this.auth = true;
  }

  public logout() {
    if (this.isAuthenticated()) {
      console.log('Logout');
      this.locStorage.cleanLocStorage();
      this.auth = false;
      this.user.firstname = '';
    }
  }
}
