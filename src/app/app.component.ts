import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth-service.';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'first-angular';

  isAuth() {
    return this.authService.isAuthenticated();
  }

  isEditPageShow() {
    if (this.authService.isAuthenticated()) {
      return this.coursesService.addCourseShow;
    }
  }

  constructor(
    private authService: AuthService,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    console.log('The token is ' + localStorage.getItem('token'));
  }
}
