import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.module';
import { CoursesService } from '../../services/courses.service';
import { AuthService } from '../../services/auth-service.';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  public coursesItems: CoursesListItem[] = [];
  public searchValue = '';
  public auth = false;

  onSearchButtonFilterClick(searchValue) {
    this.searchValue = searchValue;
  }

  constructor(
    private coursesService: CoursesService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.coursesItems = this.coursesService.getCoursesItems();
    this.auth = this.authService.isAuthenticated();
  }
}
