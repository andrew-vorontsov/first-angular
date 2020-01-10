import { Injectable } from '@angular/core';
import { Person } from '../users/person.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from './local-storage.service';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService,
    private tokenService: TokenService
  ) {}

  private url = 'http://localhost:3000';
  private auth = false;

  public user: Person = {
    id: -1,
    email: '',
    password: '',
    firstname: '',
    lastname: '',
  };

  private logger() {
    this.auth = true;
    this.router.navigate(['/courses']);
  }

  private getUserInfo(email): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.url}/users`, {
      params: new HttpParams().set('email', email),
    });
  }

  public isAuthenticated() {
    if (this.auth) {
      return this.auth;
    } else {
      return this.auth;
    }
  }

  public hasAuthToken() {
    const token = this.storageService.getToken();
    if (!token) {
      return null;
    } else {
      this.router.navigate(['/courses']);
    }
  }

  public login(name, pass) {
    this.tokenService
      .loginAndGetToken({ email: name, password: pass })
      .subscribe(
        data => {
          console.log(data);
          this.storageService.setToken(data);
          this.getUserInfo(name).subscribe(user => {
            console.log(user);
            this.storageService.setUserToLocStorage(user[0]);
            this.router.navigate(['/courses']);
          });
        },
        error => alert(error.error)
      );
  }

  public logout() {
    this.storageService.cleanLocStorage();
    this.router.navigate(['/login']);
  }
}
