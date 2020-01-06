import { Injectable } from '@angular/core';
import { Person } from '../users/person.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService
  ) {}

  private url = 'http://localhost:3000';
  public auth = false;

  public user: Person = {
    id: -1,
    firstname: '',
    lastname: '',
  };

  public getUsers(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.url}/persons`);
  }

  public getUserInfo(name): Observable<Person> {
    return this.http.get<Person>(`${this.url}/persons?firstname=${name}`);
  }

  private getAuthToken() {
    return this.http.get(
      `${this.url}/auth/${this.storageService.getLocStorageUser().id}`
    );
  }

  private setAuthToken(token) {
    return this.http.post(`${this.url}/auth`, token);
  }

  private deleteAuthToken(token) {
    return this.http.delete(`${this.url}/auth/${token.id}`);
  }

  public hasAuthToken() {
    if (this.storageService.getLocStorageUser()) {
      this.getAuthToken().subscribe(() => {
        this.auth = true;
        this.user = this.storageService.getLocStorageUser();
        this.router.navigate(['/courses']);
      });
    }
  }

  public isAuthenticated() {
    if (this.auth) {
      return this.auth;
    } else {
      return this.auth;
    }
  }

  public login(name) {
    this.getUserInfo(name).subscribe(user => {
      this.user = user[0];
      if (!this.user) {
        alert('Введите зарегистрированное имя (Bob, Maria, Habib)');
        return null;
      }
      this.auth = true;
      this.setAuthToken({
        id: this.user.id,
      }).subscribe(() => {
        this.storageService.setUserToLocStorage(this.user);
        this.router.navigate(['/courses']);
      });
    });
  }

  public logout() {
    this.auth = false;
    this.storageService.cleanLocStorage();
    this.deleteAuthToken(this.user).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
