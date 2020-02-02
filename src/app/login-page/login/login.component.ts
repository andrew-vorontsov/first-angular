import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.';
import { Router } from '@angular/router';
import { Subscription, empty } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private sub: Subscription = empty().subscribe();
  public form: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.checkAuth().subscribe();
  }

  onLoginClick() {
    this.sub = this.authService
      .login(this.form.value.login, this.form.value.password)
      .subscribe(() => {
        this.router.navigate(['/courses']);
      });
  }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
