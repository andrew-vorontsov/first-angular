import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesListItem } from '../courses/courses-list-item.module';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
  providers: [DatePipe],
})
export class EditPageComponent implements OnInit {
  constructor(
    private coursesService: CoursesService,
    private datePipe: DatePipe,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  public title = 'Add course';
  public creationDate = '';
  private id = this.activeRoute.snapshot.params.id;

  public newCourse: CoursesListItem = {
    id: -1,
    title: '',
    description: '',
    creationDate: 0,
    duration: null,
    topRated: false,
  };

  private setUpdatingCourse() {
    const coursesItem = this.coursesService.getItemById(+this.id);
    this.newCourse = { ...coursesItem };
    this.newCourse.duration = this.newCourse.duration / 1000 / 60;
    this.creationDate = this.datePipe.transform(
      this.newCourse.creationDate,
      'yyyy-MM-dd'
    );
  }

  public isNewCourse() {
    if (!+this.id) {
      return true;
    } else {
      return false;
    }
  }

  private isNewCourseFilled() {
    if (
      this.newCourse.title &&
      this.creationDate &&
      this.newCourse.description &&
      +this.newCourse.duration
    ) {
      return true;
    } else {
      return false;
    }
  }
  private transformDateAndRediretion() {
    this.newCourse.creationDate = +new Date(this.creationDate);
    this.router.navigate(['/courses']);
  }

  public onSaveBtnClick() {
    if (this.isNewCourseFilled() && this.isNewCourse()) {
      this.transformDateAndRediretion();
      this.coursesService.addCourseItem(this.newCourse);
    } else {
      alert('Заполните все поля корректно');
    }
  }

  public onUpdateBtnClick() {
    if (this.isNewCourseFilled() && !this.isNewCourse()) {
      this.transformDateAndRediretion();
      this.coursesService.updateItem(this.newCourse);
    } else {
      alert('Заполните все поля корректно');
    }
  }

  public onCloseBtnClick() {
    this.router.navigate(['/courses']);
  }

  ngOnInit() {
    if (!this.isNewCourse()) {
      this.title = 'Update course';
      this.setUpdatingCourse();
    }
  }
}
