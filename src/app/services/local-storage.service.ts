import { Injectable } from '@angular/core';
import { Person } from '../users/person.module';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public getLocStorageUser(): Person {
    return JSON.parse(localStorage.getItem('userinfo'));
  }

  public setUserToLocStorage(user) {
    user = JSON.stringify(user);
    localStorage.setItem('userinfo', user);
  }

  public setToken(token) {
    localStorage.setItem('token', token);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public cleanLocStorage() {
    localStorage.clear();
  }
}
