import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit {
  constructor(private coursesService: CoursesService, private router: Router) {}

  public duration;
  public durationInMinutes() {
    return this.duration * 1000 * 60;
  }

  onSaveBtnClick() {
    this.coursesService.addCourseShow = !this.coursesService.addCourseShow;
    this.coursesService.addCourseItem();
    this.router.navigate(['/courses-page']);
  }

  onCloseBtnClick() {
    this.router.navigate(['/courses-page']);
  }

  ngOnInit() {}
}
