import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.';
import { StorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  isAuth() {
    return this.authService.isAuthenticated();
  }

  setUserName() {
    if (this.authService.isAuthenticated()) {
      return this.storageService.getLocStorage('userInfo');
    } else {
      return this.authService.user.firstname;
    }
  }

  getDataFromLocalStore() {
    return this.storageService.getLocStorage('userInfo');
  }

  onLogoffClick() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.getDataFromLocalStore();
  }
}
