import { Injectable } from '@angular/core';
import { persons } from 'common/constants';
import { Person } from '../users/person.module';
import { StorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  private url = 'http://localhost:3000/persons';
  public auth = false;

  public user: Person = {
    id: -1,
    firstname: '',
    lastname: '',
  };

  public personsStatic = persons;

  public getUsers(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.url}/persons`);
  }

  public getUserInfo(name): Observable<Person> {
    return this.http.get<Person>(`${this.url}/persons?firstname=${name}`);
  }

  private getAuthToken() {
    return this.http.get(`${this.url}/auth`);
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
      if (this.user) {
        this.auth = true;
        this.http.put(`${this.url}/auth`, { token: '3jre459n9iwe02023m0' });
        this.router.navigate(['/courses']);
      } else {
        alert('Введите зарегистрированное имя (Bob, Maria, Habib)');
      }
    });
  }

  public logout() {
    if (this.isAuthenticated()) {
      this.auth = false;
      this.user.firstname = '';
      this.http.put(`${this.url}/auth`, { token: '' });
      this.router.navigate(['/login']);
    }
  }
}
