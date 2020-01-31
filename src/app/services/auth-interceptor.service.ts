import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { StorageService } from './local-storage.service';
import { LoadingService } from './loading-service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private storageService: StorageService,
    private router: Router,
    private loadingService: LoadingService
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
    this.loadingService.start();

    return next.handle(cloned).pipe(
      delay(100),
      tap(
        () => {},
        error => {
          this.loadingService.stop();
          if (!req.url.includes('login')) {
            this.router.navigate(['/login']);
            alert(error.statusText);
          } else if (error.status === 400) {
            alert('Неправильный логин или пароль');
          } else {
            alert('Сервер недоступен');
          }
        },
        () => {
          this.loadingService.stop();
        }
      )
    );
  }
}
