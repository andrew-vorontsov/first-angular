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
    firstname: '',
    lastname: '',
  };

  private logger() {
    this.auth = true;
    this.router.navigate(['/courses']);
  }

  private getUserInfo(name): Observable<Person> {
    return this.http.get<Person>(`${this.url}/persons`, {
      params: new HttpParams().set('firstname', name),
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
    const savedUser = this.storageService.getLocStorageUser();
    if (!savedUser) {
      return null;
    }
    this.tokenService.getTokenHttp(savedUser.id).subscribe(
      authUser => {
        if (authUser.id === savedUser.id) {
          this.user = savedUser;
          this.logger();
        } else {
          alert('Ошибка запроса');
        }
      },
      error => alert('Токен истек')
    );
  }

  public login(name) {
    this.getUserInfo(name).subscribe(user => {
      this.user = user[0];
      if (!this.user) {
        alert('Введите зарегистрированное имя (Bob, Maria, Habib)');
        return null;
      }
      this.storageService.setUserToLocStorage(this.user);
      this.logger();
      this.tokenService.setToken(this.user.id).subscribe(
        () => {},
        error => {
          const prove = confirm(
            'Вы уже зашли с другого устройства. Выйти со всех устройств?'
          );
          if (prove) {
            this.logout();
          }
        }
      );
    });
  }

  public logout() {
    this.auth = false;
    this.storageService.cleanLocStorage();
    this.router.navigate(['/login']);
    this.tokenService.removeToken(this.user.id).subscribe();
  }
}
