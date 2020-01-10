import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TOKEN } from '../shared/token.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private http: HttpClient) {}
  private TOKEN = '';
  private url = 'http://localhost:3000';

  loginAndGetToken(user): Observable<TOKEN> {
    return this.http.post<TOKEN>(`${this.url}/login`, user);
  }

  getToken() {
    return this.TOKEN;
  }

  getTokenHttp(id) {
    return this.http.get<TOKEN>(`${this.url}/AUTH_TOKENS/${id}`);
  }

  removeToken(id) {
    this.TOKEN = '';
    return this.http.delete(`${this.url}/AUTH_TOKENS/${id}`);
  }

  setToken(ID) {
    const tok = Math.round(Math.random() * 100000).toString();
    this.TOKEN = tok;
    return this.http.post(this.url, { token: tok, id: ID });
  }
}
