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
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/courses-page']);
    }
  }

  onLoginClick() {
    if (this.name) {
      this.authService.login(this.name.toLowerCase());
      this.router.navigate(['/courses-page']);
    }
  }
}
