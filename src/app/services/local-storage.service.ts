import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public getLocStorage(data) {
    if (data === 'userInfo') {
      return localStorage.getItem('userInfo');
    }
    if (data === 'token') {
      return localStorage.getItem('token');
    }
  }

  public setUserInfoToLocStorage(person) {
    localStorage.setItem('userInfo', person);
  }

  public setTokenToLocStorage() {
    localStorage.setItem('token', this.createToken());
  }

  public createToken(): string {
    const token = Math.round(Math.random() * 1000);
    return token.toString();
  }

  public cleanLocStorage() {
    localStorage.clear();
  }
}
