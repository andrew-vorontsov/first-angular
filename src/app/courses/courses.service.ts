import { Injectable } from '@angular/core';
import { CoursesListItem } from './courses-list-item.module';
import { Constants } from 'common/constants';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  public coursesStatic = new Constants;

  public getCoursesItems() : CoursesListItem[] {

    return this.coursesStatic.courses;

  }
}
