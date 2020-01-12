import { Injectable } from '@angular/core';
import { CoursesListItem } from '../courses/courses-list-item.module';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { coursesUrl } from 'common/constants';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  public countOfCourses = 2;

  public searchRun(value): Observable<CoursesListItem[]> {
    return this.http.get<CoursesListItem[]>(coursesUrl, {
      params: new HttpParams().set('q', value),
    });
  }

  public getMaxCountOFCourses() {
    return this.http.head(coursesUrl, {
      params: new HttpParams().set('_start', '0').set('_end', '1'),
      observe: 'response',
    });
  }

  public setCountOfCourses() {
    return (this.countOfCourses += 2);
  }

  public getCountOfCourses() {
    return this.countOfCourses;
  }

  public getItemById(id): Observable<CoursesListItem> {
    return this.http.get<CoursesListItem>(`${coursesUrl}/${id}`);
  }

  public getCoursesItems(first, last): Observable<CoursesListItem[]> {
    return this.http.get<CoursesListItem[]>(coursesUrl, {
      params: new HttpParams().set('_start', first).set('_end', last),
    });
  }

  public addCourseItem(newCourse): Observable<CoursesListItem> {
    newCourse.duration *= 1000 * 60;
    return this.http.post<CoursesListItem>(coursesUrl, newCourse);
  }

  public updateItem(newCourse): Observable<CoursesListItem> {
    newCourse.duration *= 1000 * 60;
    return this.http.put<CoursesListItem>(
      `${coursesUrl}/${newCourse.id}`,
      newCourse
    );
  }

  public deleteItem(id): Observable<void> {
    return this.http.delete<void>(`${coursesUrl}/${id}`);
  }
}
