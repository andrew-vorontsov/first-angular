import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.';
import { StorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  isAuth() {
    return this.authService.isAuthenticated();
  }

  setUserName() {
    if (this.isAuth()) {
      return this.storageService.getLocStorage('userInfo');
    } else {
      return this.authService.user.firstname;
    }
  }

  getDataFromLocalStore() {
    console.log(this.storageService.getLocStorage('userInfo'));
    return this.storageService.getLocStorage('userInfo');
  }

  onLogoffClick() {
    this.authService.logout();
    this.getDataFromLocalStore();
  }
}
