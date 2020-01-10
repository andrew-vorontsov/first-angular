import { Injectable } from '@angular/core';
import { Person } from '../users/person.module';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from './local-storage.service';
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

  private url = 'http://localhost:3000/660';
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

  private isLoggedIn() {
    const token = this.storageService.getToken();
    const user: Person = this.storageService.getLocStorageUser();
    if (!token || !user) {
      return null;
    } else {
      this.user = user;
      return this.http.get(`${this.url}/AUTH_TOKENS`, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
        observe: 'response',
      });
    }
  }

  public setAuth() {
    if (this.isLoggedIn()) {
      this.isLoggedIn().subscribe(response => {
        if (response.status === 200) {
          this.logger();
        }
      });
    }
  }

  public isAuth() {
    if (this.auth) {
      return this.auth;
    } else {
      return this.auth;
    }
  }

  public login(name, pass) {
    this.tokenService
      .loginAndGetToken({ email: name, password: pass })
      .subscribe(data => {
        this.storageService.setToken(data.accessToken);
        this.logger();
        this.getUserInfo(name).subscribe(user => {
          this.user = user[0];
          this.storageService.setUserToLocStorage(user[0]);
        });
      });
  }

  public logout() {
    this.storageService.cleanLocStorage();
    this.router.navigate(['/login']);
    this.auth = false;
  }
}
