import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.';
import { StorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';
import { Subscription, empty } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  public name: string;
  public password: string;
  public auth = false;
  private sub: Subscription = empty().subscribe();

  constructor(private authService: AuthService, private router: Router) {
    this.authService.checkAuth().subscribe();
  }

  onLoginClick() {
    if (this.name && this.password) {
      this.sub = this.authService
        .login(this.name.toLowerCase(), this.password)
        .subscribe(() => {
          this.auth = true;
          this.router.navigate(['/courses']);
        });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
