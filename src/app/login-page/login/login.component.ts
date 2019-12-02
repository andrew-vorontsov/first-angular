import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public name: string;

  constructor(private authService: AuthService) {}

  onLoginClick() {
    this.authService.login(this.name);
  }

  ngOnInit() {}
}
