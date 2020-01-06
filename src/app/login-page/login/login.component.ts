import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public name: string;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.hasAuthToken();
  }

  onLoginClick() {
    if (this.name) {
      this.authService.login(this.name);
    }
  }
}
