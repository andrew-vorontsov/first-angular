import { Component } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent {
  constructor(private coursesService: CoursesService, private router: Router) {}

  public newCourse = {
    title: '',
    description: '',
    date: 0,
    duration: '',
  };

  private isNewCourseFilled() {
    if (
      this.newCourse.title &&
      this.newCourse.date &&
      this.newCourse.description &&
      +this.newCourse.duration
    ) {
      return true;
    } else {
      return false;
    }
  }

  public durationInMinutes() {
    return +this.newCourse.duration * 1000 * 60;
  }

  onSaveBtnClick() {
    if (this.isNewCourseFilled()) {
      this.coursesService.addCourseItem(this.newCourse);
      this.router.navigate(['/courses-page']);
    } else {
      alert('Заполните все поля корректно');
    }
  }

  onCloseBtnClick() {
    this.router.navigate(['/courses-page']);
  }
}
