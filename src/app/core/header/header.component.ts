import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  isAuth() {
    return this.authService.isAuthenticated();
  }

  setUserName() {
    return this.authService.user.firstname;
  }

  getNameFromLocalStore() {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      return JSON.parse(userInfo).firstname;
    }
  }

  onLogoffClick() {
    this.authService.logout();
  }
}
