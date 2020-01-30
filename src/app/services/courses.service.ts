import { Injectable } from '@angular/core';
import { CoursesListItem } from '../courses/courses-list-item.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, of, from } from 'rxjs';
import { coursesUrl, protectedUrl } from 'common/constants';
import { Person } from '../users/person.module';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  private searchTitle(value): Observable<CoursesListItem[]> {
    return this.http.get<CoursesListItem[]>(coursesUrl, {
      params: new HttpParams().set('title_like', value),
    });
  }

  private searchDescription(value): Observable<CoursesListItem[]> {
    return this.http.get<CoursesListItem[]>(coursesUrl, {
      params: new HttpParams().set('description_like', value),
    });
  }

  public searchRunner(value): Observable<any> {
    return forkJoin([this.searchTitle(value), this.searchDescription(value)]);
  }

  public getMaxCountOFCourses(): Observable<any> {
    return this.http.head<any>(coursesUrl, {
      params: new HttpParams().set('_start', '0').set('_end', '1'),
      observe: 'response',
    });
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

  public getAuthors(value): Observable<any> {
    if (!value) {
      return from([]);
    }
    const names = this.http
      .get<Person[]>(`${protectedUrl}/users`, {
        params: new HttpParams().set('firstname_like', value),
      })
      .pipe(
        map(user => {
          const name = [];
          user.map(item => {
            name.push(item.firstname + ' ' + item.lastname);
          });
          return name;
        })
      );
    const lastNames = this.http
      .get<Person[]>(`${protectedUrl}/users`, {
        params: new HttpParams().set('lastname_like', value),
      })
      .pipe(
        map(user => {
          const name = [];
          user.map(item => {
            name.push(item.firstname + ' ' + item.lastname);
          });
          return name;
        })
      );
    return forkJoin(names, lastNames);
  }
}
