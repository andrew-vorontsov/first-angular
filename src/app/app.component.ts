import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth-service.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'first-angular';

  auth() {
    return this.authService.isAuthenticated();
  }

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated();
    console.log(this.authService.isAuthenticated());
    console.log(localStorage.getItem('token'));
  }
}
