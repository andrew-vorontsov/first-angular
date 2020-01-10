import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth-service.';
import { TokenService } from './token.service';
import { StorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(
    route: import('@angular/router').ActivatedRouteSnapshot,
    state: import('@angular/router').RouterStateSnapshot
  ) {
    const auth = this.authService.isAuth();
    if (auth) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
