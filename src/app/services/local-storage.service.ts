import { Injectable } from '@angular/core';
import { Person } from '../shared/person.module';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public getLocStorageUser(): Person {
    if (localStorage.getItem('userinfo')) {
      return JSON.parse(localStorage.getItem('userinfo'));
    }
  }

  public setUserToLocStorage(user: Person) {
    user.password = '';
    localStorage.setItem('userinfo', JSON.stringify(user));
  }

  public setToken(token) {
    localStorage.setItem('token', token);
  }

  public getToken() {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    }
  }

  public cleanLocStorage() {
    localStorage.clear();
  }
}
