import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public name: string;
  public password: string;
  public auth = false;

  constructor(private authService: AuthService) {
    this.authService.checkAuth();
    this.auth = this.authService.isAuth();
  }

  onLoginClick() {
    if (this.name && this.password) {
      this.authService.login(this.name.toLowerCase(), this.password);
    }
  }
}
