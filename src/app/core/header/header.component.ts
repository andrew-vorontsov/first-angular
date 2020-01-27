import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.';
import { StorageService } from 'src/app/services/local-storage.service';
import { Subscription, empty } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  @Input() public auth = true;
  public email = '';
  public name = '';
  private sub: Subscription = empty().subscribe();
  private logoutSub: Subscription = empty().subscribe();

  onLogoffClick() {
    this.logoutSub = this.authService.logout().subscribe();
  }

  getUserName() {
    this.authService.getUserEmail().subscribe(email => {
      this.email = email;
    });
    return this.authService.getUserInfo(this.email).subscribe(user => {
      this.name = user.firstname;
    });
  }

  ngOnInit() {
    if (this.auth) {
      this.sub = this.getUserName();
    }
    this.authService.test().subscribe(value => console.log(value));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.logoutSub.unsubscribe();
  }
}
