import { Injectable } from '@angular/core';
import { CoursesListItem } from '../courses/courses-list-item.module';
import { Constants } from 'common/constants';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  public coursesStatic = new Constants();

  public searchValue = '';

  public changeSearchValue(value) {
    this.searchValue = value;
  }

  private idGenerator(): number {
    const idCourse = Math.round(Math.random() * 1000);
    if (this.coursesStatic.courses.find(item => item.id === idCourse)) {
      return this.idGenerator();
    } else {
      return idCourse;
    }
  }

  public getCoursesItems(): CoursesListItem[] {
    return this.coursesStatic.courses;
  }

  public getItemById(id): CoursesListItem {
    const ItemById = this.coursesStatic.courses.find(item => item.id === id);
    return ItemById;
  }

  public getIndexItemById(id) {
    const indexItemById = this.coursesStatic.courses.findIndex(
      item => item.id === id
    );
    return indexItemById;
  }

  public addCourseItem(newCourse): CoursesListItem[] {
    this.coursesStatic.courses.push({
      id: this.idGenerator(),
      title: newCourse.title,
      creationDate: +new Date(newCourse.creationDate),
      duration: +newCourse.duration * 1000 * 60,
      description: newCourse.description,
      topRated: newCourse.topRated,
    });
    return this.coursesStatic.courses;
  }

  public updateItem(newCourse): CoursesListItem {
    const item = this.getItemById(newCourse.id);
    item.title = newCourse.title;
    item.duration = +newCourse.duration * 1000 * 60;
    item.description = newCourse.description;
    item.creationDate = newCourse.creationDate;
    item.topRated = newCourse.topRated;
    return item;
  }

  public deleteItem(id): CoursesListItem[] {
    if (confirm(`Удалить ${this.getItemById(id).title} ?`)) {
      this.coursesStatic.courses.splice(this.getIndexItemById(id), 1);
      return this.coursesStatic.courses;
    }
  }
}
