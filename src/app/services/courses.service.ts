import { Injectable } from '@angular/core';
import { CoursesListItem } from '../courses/courses-list-item.module';
import { Constants } from 'common/constants';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  public coursesStatic = new Constants();

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

  public addCourseItem(): CoursesListItem[] {
    this.coursesStatic.courses.push({
      id: this.idGenerator(),
      title: 'new course ' + this.idGenerator(),
      creationDate: new Date().getTime(),
      duration: Math.floor(Math.random() * 140) * 1000 * 60,
      description: 'This is an awesome video!',
      topRated: Boolean(Math.round(Math.random())),
    });
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

  public updateItem(id): CoursesListItem {
    const item = this.getItemById(id);
    console.log(`${item.title} was updated!`);
    return item;
  }

  public deleteItem(id): CoursesListItem[] {
    if (confirm(`Удалить ${this.getItemById(id).title} ?`)) {
      this.coursesStatic.courses.splice(this.getIndexItemById(id), 1);
      return this.coursesStatic.courses;
    }
  }
}
