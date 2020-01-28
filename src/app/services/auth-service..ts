import { Injectable } from '@angular/core';
import { Person } from '../users/person.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from './local-storage.service';
import { TOKEN } from '../shared/token.module';
import { commonUrl, protectedUrl } from 'common/constants';
import { map, concatMap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService
  ) {}

  public getUserEmail(): Observable<string> {
    return of(this.storageService.getLocStorageUser().email);
  }

  public getUserInfo(email): Observable<Person> {
    return this.http
      .get<Person>(`${protectedUrl}/users`, {
        params: new HttpParams().set('email', email),
      })
      .pipe(
        map(user => {
          this.storageService.setUserToLocStorage(user[0]);
          return user[0];
        })
      );
  }

  public isAuth(): Observable<boolean> {
    return this.http
      .head(`${protectedUrl}/courses`, {
        observe: 'response',
      })
      .pipe(
        map(response => {
          return response.ok;
        })
      );
  }

  public checkAuth(): Observable<void> {
    return new Observable(() => {
      const token = this.storageService.getToken();
      const user = this.storageService.getLocStorageUser();
      if (user && token) {
        this.router.navigate(['/courses']);
      }
    });
  }

  public login(email, password): Observable<any> {
    return this.http
      .post<TOKEN>(`${commonUrl}/login`, { email, password })
      .pipe(
        concatMap(token => {
          this.storageService.setToken(token.accessToken);
          return this.getUserInfo(email);
        })
      );
  }

  public logout(): Observable<void> {
    return new Observable(() => {
      this.storageService.cleanLocStorage();
      this.router.navigate(['/login']);
    });
  }
}
