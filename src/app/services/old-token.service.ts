import { Observable } from 'rxjs';
import { Person } from '../users/person.module';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageService } from './local-storage.service';

export class OldTokenService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService
  ) {}

  private url = 'http://localhost:3000';
  public auth = false;

  // public user = {
  //   id: -1,
  //   firstname: '',
  //   lastname: '',
  // };

  // private getAuthToken(id): Observable<Person> {
  //   return this.http.get<Person>(`${this.url}/auth/${id}`);
  // }

  // private setAuthToken(token) {
  //   return this.http.post(`${this.url}/auth`, token);
  // }

  // private deleteAuthToken(token) {
  //   return this.http.delete(`${this.url}/auth/${token.id}`);
  // }

  // public hasAuthToken() {
  //   const savedUser = this.storageService.getLocStorageUser();
  //   if (!savedUser) {
  //     return null;
  //   }
  //   this.getAuthToken(savedUser.id).subscribe(authUser => {
  //     if (authUser.id === savedUser.id) {
  //       this.auth = true;
  //       this.user = savedUser;
  //       this.router.navigate(['/courses']);
  //     }
  //   });
  // }
}
