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
    if (this.storageService.getToken()) {
      return true;
    } else {
      return false;
    }
  }

  setUserName() {
    if (this.storageService.getLocStorageUser()) {
      return this.storageService.getLocStorageUser().firstname;
    }
  }

  onLogoffClick() {
    this.authService.logout();
  }
}
