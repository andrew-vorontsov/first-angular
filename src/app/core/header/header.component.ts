import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.';
import { StorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  isAuth() {
    if (this.authService.isAuth()) {
      return true;
    } else {
      return false;
    }
  }

  setUserName() {
    if (this.authService.isAuth()) {
      return this.authService.user.firstname;
    }
  }

  onLogoffClick() {
    this.authService.logout();
  }
}
