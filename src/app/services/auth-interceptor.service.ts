import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpEventType,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      headers: req.headers.append('Auth', this.tokenService.getToken()),
    });

    return next.handle(cloned);
  }
}
