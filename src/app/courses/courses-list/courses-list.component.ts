import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.module';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public coursesItems: CoursesListItem[] = [];
  private countOfShowedCourses = 2;
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
    const courses: CoursesListItem[] = [];
    this.countOfShowedCourses = 2;
    this.coursesService.searchRunner(value).subscribe(result => {
      const commonResult = result[0].concat(result[1]);
      for (let i = 0; i < commonResult.length; i++) {
        if (!courses.find(item => item.id === commonResult[i].id)) {
          courses.push(commonResult[i]);
        }
      }
      this.coursesItems = courses;
    });
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
    if (this.countOfShowedCourses < this.maxCountOfCourses) {
      this.countOfShowedCourses += 2;
      this.getCourses(0, this.countOfShowedCourses);
    } else {
      alert('Все курсы показаны');
    }
  }

  onNoDataClick() {
    this.countOfShowedCourses = 2;
    this.getCourses(0, this.countOfShowedCourses);
  }

  ngOnInit() {
    this.getCourses(0, this.countOfShowedCourses);
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
