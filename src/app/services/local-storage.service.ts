import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public getLocStorageUser() {
    return JSON.parse(localStorage.getItem('userinfo'));
  }

  public setUserToLocStorage(user) {
    user = JSON.stringify(user);
    localStorage.setItem('userinfo', user);
  }

  public cleanLocStorage() {
    localStorage.clear();
  }
}
