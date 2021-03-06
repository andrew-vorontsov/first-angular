import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesListItem } from '../courses/courses-list-item.module';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
  providers: [DatePipe, CustomValidators],
})
export class EditPageComponent implements OnInit {
  constructor(
    private coursesService: CoursesService,
    private datePipe: DatePipe,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  public usersList = [];
  public title = 'Add course';
  public creationDate = '';
  private id = this.activeRoute.snapshot.params.id;
  public form: FormGroup;

  public newCourse: CoursesListItem = {
    id: null,
    title: '',
    description: '',
    creationDate: 0,
    duration: null,
    topRated: false,
    authors: [],
  };

  private patchForm() {
    this.form.patchValue({
      id: this.newCourse.id,
      title: this.newCourse.title,
      description: this.newCourse.description,
      creationDate: this.creationDate,
      duration: this.newCourse.duration,
      topRated: this.newCourse.topRated,
      authors: this.newCourse.authors,
    });
  }

  private setUpdatingCourse() {
    this.coursesService.getItemById(+this.id).subscribe(course => {
      this.newCourse = course;
      this.newCourse.duration = Math.round(this.newCourse.duration / 1000 / 60);
      this.creationDate = this.datePipe.transform(
        this.newCourse.creationDate,
        'dd.MM.yyyy'
      );
      this.patchForm();
    });
  }

  public isNewCourse() {
    return !+this.id;
  }

  public onSaveBtnClick() {
    this.coursesService.addCourseItem(this.form.value).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }

  public onUpdateBtnClick() {
    this.coursesService.updateItem(this.form.value).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }

  public onCloseBtnClick() {
    this.router.navigate(['/courses']);
  }

  public searchAuthor(value) {
    this.coursesService.getAuthors(value).subscribe(authors => {
      this.usersList = authors;
    });
  }

  public submit() {
    if (this.isNewCourse()) {
      this.onSaveBtnClick();
    } else {
      this.onUpdateBtnClick();
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(),
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
      ]),
      creationDate: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      topRated: new FormControl(),
      authors: new FormControl('', [Validators.required]),
    });
    if (!this.isNewCourse()) {
      this.title = 'Update course';
      this.setUpdatingCourse();
    } else {
      this.patchForm();
    }
  }
}
