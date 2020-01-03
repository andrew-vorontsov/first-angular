import { Injectable } from '@angular/core';
import { CoursesListItem } from '../courses/courses-list-item.module';
import { courses } from 'common/constants';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  public searchValue = '';

  public changeSearchValue(value) {
    this.searchValue = value;
  }

  private idGenerator(): number {
    const idCourse = Math.round(Math.random() * 1000);
    if (courses.find(item => item.id === idCourse)) {
      return this.idGenerator();
    } else {
      return idCourse;
    }
  }

  public getCoursesItems(): CoursesListItem[] {
    return courses;
  }

  public getItemById(id): CoursesListItem {
    const ItemById = courses.find(item => item.id === id);
    return ItemById;
  }

  public getIndexItemById(id) {
    const indexItemById = courses.findIndex(item => item.id === id);
    return indexItemById;
  }

  public addCourseItem(newCourse): CoursesListItem[] {
    courses.push({
      id: this.idGenerator(),
      title: newCourse.title,
      creationDate: +new Date(newCourse.creationDate),
      duration: +newCourse.duration * 1000 * 60,
      description: newCourse.description,
      topRated: newCourse.topRated,
    });
    return courses;
  }

  public updateItem(newCourse) {
    const item = this.getItemById(newCourse.id);
    // tslint:disable-next-line:forin
    for (const key in item) {
      item[key] = newCourse[key];
    }
    item.duration = newCourse.duration * 1000 * 60;
  }

  public deleteItem(id): CoursesListItem[] {
    if (confirm(`Удалить ${this.getItemById(id).title} ?`)) {
      courses.splice(this.getIndexItemById(id), 1);
      return courses;
    }
  }
}
