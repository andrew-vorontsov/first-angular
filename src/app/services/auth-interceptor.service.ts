import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StorageService } from './local-storage.service';
import { AuthService } from './auth-service.';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      headers: req.headers.set(
        'Authorization',
        'Bearer ' + this.storageService.getToken()
      ),
    });

    return next.handle(cloned).pipe(
      tap(
        () => {},
        error => {
          this.authService.logout();
          alert(error.error);
        }
      )
    );
  }
}
