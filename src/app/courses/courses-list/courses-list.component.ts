import { Component, OnInit, ViewChild } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.module';
import { CoursesService } from '../../services/courses.service';
import { AuthService } from '../../services/auth-service.';
import { CoursesFilterPipe } from 'src/app/pipes/courses-filter.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [CoursesFilterPipe],
})
export class CoursesListComponent implements OnInit {
  public coursesItems: CoursesListItem[] = [];
  public auth: boolean;

  getCourses() {
    this.coursesItems = this.coursesService.getCoursesItems();
    this.coursesItems = this.filteredCourses.transform(
      this.coursesItems,
      this.coursesService.searchValue
    );
    return this.coursesItems;
  }

  onDeleteButtonClick(item) {
    this.coursesService.deleteItem(item.id);
  }

  onEditButtonClick(item) {
    this.coursesService.updateItem(item.id);
  }

  onShowmoreClick(event) {
    console.log('showmore click');
  }

  constructor(
    private coursesService: CoursesService,
    private authService: AuthService,
    private filteredCourses: CoursesFilterPipe
  ) {}

  ngOnInit() {
    this.coursesItems = this.coursesService.getCoursesItems();
    this.auth = this.authService.isAuthenticated();
  }
}
