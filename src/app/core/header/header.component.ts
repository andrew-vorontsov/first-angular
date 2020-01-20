import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.';
import { StorageService } from 'src/app/services/local-storage.service';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  @Input() public auth;
  public name;

  onLogoffClick() {
    this.authService.logout();
  }

  ngOnInit() {
    if (this.auth) {
      return;
    }
    this.authService
      .getUserInfo(this.storageService.getLocStorageUser().email)
      .subscribe(user => {
        this.name = user[0].firstname;
      });
  }
}
