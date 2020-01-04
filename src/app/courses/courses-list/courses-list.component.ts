import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.module';
import { CoursesService } from '../../services/courses.service';
import { AuthService } from '../../services/auth-service.';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public coursesItems: CoursesListItem[] = [];
  public auth: boolean;

  private getCoursesSub: Subscription;

  constructor(
    private coursesService: CoursesService,
    private authService: AuthService,
    private router: Router
  ) {}

  getCourses() {
    this.getCoursesSub = this.coursesService
      .getCoursesItems()
      .subscribe(courses => {
        this.coursesItems = courses;
      });
  }

  onDeleteButtonClick(course) {
    this.coursesService.deleteItem(course.id).subscribe(() => {
      this.coursesItems = this.coursesItems.filter(
        item => item.id !== course.id
      );
    });
  }

  onEditButtonClick(item) {
    this.router.navigate(['/courses/' + item.id]);
  }

  onShowmoreClick(event) {
    this.getCourses();
  }

  ngOnInit() {
    this.getCourses();
    this.auth = this.authService.isAuthenticated();
  }

  ngOnDestroy() {
    this.getCoursesSub.unsubscribe();
  }
}
