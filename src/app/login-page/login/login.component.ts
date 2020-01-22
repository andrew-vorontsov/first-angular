import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.';
import { StorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public name: string;
  public password: string;
  public auth = false;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {
    this.authService.checkAuth().subscribe();
  }

  onLoginClick() {
    if (this.name && this.password) {
      this.authService
        .login(this.name.toLowerCase(), this.password)
        .subscribe(user => {
          this.storageService.setUserToLocStorage(user);
          this.auth = true;
          this.router.navigate(['/courses']);
        });
    }
  }
}
