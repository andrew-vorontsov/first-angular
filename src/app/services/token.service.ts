import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TOKEN } from '../shared/token.module';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private http: HttpClient) {}
  private TOKEN = '';
  private url = 'http://localhost:3000/AUTH_TOKENS';

  getToken() {
    return this.TOKEN;
  }

  getTokenHttp(id) {
    return this.http.get<TOKEN>(`${this.url}/${id}`);
  }

  removeToken(id) {
    this.TOKEN = '';
    return this.http.delete(`${this.url}/${id}`);
  }

  setToken(ID) {
    const tok = Math.round(Math.random() * 100000).toString();
    this.TOKEN = tok;
    return this.http.post(this.url, { token: tok, id: ID });
  }
}
