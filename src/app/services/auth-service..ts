import { Injectable } from '@angular/core';
import { Person } from '../users/person.module';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from './local-storage.service';
import { CoursesService } from './courses.service';
import { TOKEN } from '../shared/token.module';
import { commonUrl, protectedUrl } from 'common/constants';

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

  public user: Person = {
    id: -1,
    email: '',
    password: '',
    firstname: '',
    lastname: '',
  };

  private getUserInfo(email): Observable<Person[]> {
    return this.http.get<Person[]>(`${protectedUrl}/users`, {
      params: new HttpParams().set('email', email),
    });
  }

  private loginAndGetToken(user): Observable<TOKEN> {
    return this.http.post<TOKEN>(`${commonUrl}/login`, user);
  }

  public setAuth() {
    const token = this.storageService.getToken();
    const user: Person = this.storageService.getLocStorageUser();
    if (!token || !user) {
      return null;
    }
    this.user = user;
    this.coursesService.getMaxCountOFCourses().subscribe(response => {
      if (response.status === 200) {
        this.auth = true;
        this.router.navigate(['/courses']);
      }
    });
  }

  public isAuth() {
    return this.auth;
  }

  public login(name, pass) {
    this.loginAndGetToken({ email: name, password: pass }).subscribe(data => {
      this.storageService.setToken(data.accessToken);
      this.auth = true;
      this.getUserInfo(name).subscribe(user => {
        this.user = user[0];
        this.storageService.setUserToLocStorage(user[0]);
        this.router.navigate(['/courses']);
      });
    });
  }

  public logout() {
    this.storageService.cleanLocStorage();
    this.router.navigate(['/login']);
    this.auth = false;
    this.coursesService.countOfCourses = 2;
  }
}
