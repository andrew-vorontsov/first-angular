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
    if (this.isAuth) {
      return this.authService.user.firstname;
    } else {
      return '';
    }
  }

  getDataFromLocalStore() {
    const person = this.storageService.getLocStorage('userInfo');
    const user = JSON.parse(person);
    return user.firstname;
  }

  onLogoffClick() {
    this.setUserName();
    this.authService.logout();
  }
}
