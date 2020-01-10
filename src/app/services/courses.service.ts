import { Injectable } from '@angular/core';
import { CoursesListItem } from '../courses/courses-list-item.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  private urlCourses = 'http://localhost:3000/courses';
  private countOfCourses = 2;

  public searchRun(value): Observable<CoursesListItem[]> {
    return this.http.get<CoursesListItem[]>(this.urlCourses, {
      params: new HttpParams().set('q', value),
    });
  }

  public setCountOfCourses(): number {
    return ++this.countOfCourses;
  }

  public getCountOfCourses() {
    return this.countOfCourses;
  }

  public getItemById(id): Observable<CoursesListItem> {
    const ItemById = this.http.get<CoursesListItem>(`${this.urlCourses}/${id}`);
    return ItemById;
  }

  public getCoursesItems(first, last): Observable<CoursesListItem[]> {
    return this.http.get<CoursesListItem[]>(this.urlCourses, {
      params: new HttpParams().set('_page', first).set('_limit', last),
    });
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
