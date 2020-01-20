import { Injectable } from '@angular/core';
import { Person } from '../users/person.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from './local-storage.service';
import { CoursesService } from './courses.service';
import { TOKEN } from '../shared/token.module';
import { commonUrl, protectedUrl } from 'common/constants';
import { tap, observeOn, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService,
    private coursesService: CoursesService
  ) {}

  private auth = false;
  public user: Person;

  public getUserInfo(email): Observable<Person[]> {
    return this.http.get<Person[]>(`${protectedUrl}/users`, {
      params: new HttpParams().set('email', email),
    });
  }

  private loginAndGetToken(user): Observable<TOKEN> {
    return this.http.post<TOKEN>(`${commonUrl}/login`, user);
  }

  public guardAuth() {
    return this.coursesService.getMaxCountOFCourses();
  }

  public checkAuth() {
    const token = this.storageService.getToken();
    const user = this.storageService.getLocStorageUser();
    if (!user || !token) {
      this.setAuth(false);
    } else {
      this.user = user;
      this.setAuth(true);
      this.router.navigate(['/courses']);
    }
  }

  public setAuth(auth) {
    this.auth = auth;
  }

  public isAuth() {
    return this.auth;
  }

  public login(email, password) {
    this.loginAndGetToken({ email, password }).subscribe(
      data => {
        this.storageService.setToken(data.accessToken);
        this.setAuth(true);
        this.getUserInfo(email).subscribe(user => {
          this.user = user[0];
          this.storageService.setUserToLocStorage(user[0]);
          this.router.navigate(['/courses']);
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  public logout() {
    this.storageService.cleanLocStorage();
    this.router.navigate(['/login']);
    this.setAuth(false);
    this.coursesService.countOfCourses = 2;
  }
}
