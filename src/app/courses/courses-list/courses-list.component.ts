import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.module';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public coursesItems: CoursesListItem[] = [];

  private getCoursesSub: Subscription;
  private getMaxCountSub: Subscription;
  private maxCountOfCourses;

  constructor(private coursesService: CoursesService, private router: Router) {}

  getCourses(first, last) {
    this.getCoursesSub = this.coursesService
      .getCoursesItems(first, last)
      .subscribe(courses => {
        this.coursesItems = courses;
      });
  }

  onSearchClicked(value) {
    if (!value) {
      this.getCourses(0, this.coursesService.getCountOfCourses());
    } else {
      this.getCoursesSub = this.coursesService
        .searchRun(value)
        .subscribe(courses => {
          this.coursesItems = courses;
        });
    }
  }

  onDeleteButtonClick(course) {
    if (confirm(`Удалить ${course.title}?`)) {
      this.coursesService.deleteItem(course.id).subscribe(() => {
        this.coursesItems = this.coursesItems.filter(
          item => item.id !== course.id
        );
      });
    }
  }

  onEditButtonClick(item) {
    this.router.navigate(['/courses/' + item.id]);
  }

  onShowmoreClick() {
    if (this.coursesService.getCountOfCourses() < this.maxCountOfCourses) {
      this.getCourses(0, this.coursesService.setCountOfCourses());
    } else {
      alert('Все курсы показаны');
    }
  }

  ngOnInit() {
    this.getCourses(0, this.coursesService.getCountOfCourses());
    this.getMaxCountSub = this.coursesService
      .getMaxCountOFCourses()
      .subscribe(response => {
        this.maxCountOfCourses = response.headers.get('X-Total-Count');
      });
  }

  ngOnDestroy() {
    this.getMaxCountSub.unsubscribe();
    this.getCoursesSub.unsubscribe();
  }
}
