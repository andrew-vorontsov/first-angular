import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public name = this.authServise.getUserInfo();

  constructor(private authServise: AuthService) {}

  onLogoffClick() {
    this.authServise.logout();
  }

  ngOnInit() {}
}
