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
    return localStorage.getItem('userName');
  }

  onLogoffClick() {
    this.authService.logout();
  }

  ngOnInit() {}
}
