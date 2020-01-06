import { Injectable } from '@angular/core';
import { CoursesListItem } from '../courses/courses-list-item.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  private urlCourses = 'http://localhost:3000/courses';
  public searchValue = '';

  public changeSearchValue(value) {
    this.searchValue = value;
  }

  public getItemById(id): Observable<CoursesListItem> {
    const ItemById = this.http.get<CoursesListItem>(`${this.urlCourses}/${id}`);
    return ItemById;
  }

  public getCoursesItems(): Observable<CoursesListItem[]> {
    return this.http.get<CoursesListItem[]>(this.urlCourses);
  }

  public addCourseItem(newCourse): Observable<CoursesListItem> {
    newCourse.duration *= 1000 * 60;
    return this.http.post<CoursesListItem>(this.urlCourses, newCourse);
  }

  public updateItem(newCourse): Observable<CoursesListItem> {
    newCourse.duration *= 1000 * 60;
    return this.http.put<CoursesListItem>(
      `${this.urlCourses}/${newCourse.id}`,
      newCourse
    );
  }

  public deleteItem(id): Observable<void> {
    return this.http.delete<void>(`${this.urlCourses}/${id}`);
  }
}
