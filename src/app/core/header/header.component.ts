import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}
  public firstname = '';

  isAuth() {
    return this.authService.isAuth();
  }

  setUserName() {
    if (this.isAuth()) {
      return this.authService.user.firstname;
    }
  }

  onLogoffClick() {
    this.authService.logout();
  }
}
