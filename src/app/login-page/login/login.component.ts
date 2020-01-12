import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public name: string;
  public password: string;

  constructor(private authService: AuthService) {
    this.authService.setAuth();
  }

  onLoginClick() {
    if (this.name && this.password) {
      this.authService.login(this.name.toLowerCase(), this.password);
    }
  }
}
