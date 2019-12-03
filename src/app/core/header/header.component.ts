import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  isAuth() {
    return this.authService.isAuthenticated();
  }

  setUserName() {
    return this.authService.user.firstname;
  }

  setNameFromLocalStore() {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      return JSON.parse(userInfo).firstname;
    }
  }

  onLogoffClick() {
    this.authService.logout();
  }

  ngOnInit() {}
}
