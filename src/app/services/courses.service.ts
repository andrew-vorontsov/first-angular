import { Injectable } from '@angular/core';
import { CoursesListItem } from '../courses/courses-list-item.module';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { coursesUrl } from 'common/constants';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  public countOfCourses = 2;

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

  public searchRunner(value) {
    const coursesItems: CoursesListItem[] = [];
    const fork = forkJoin([
      this.searchTitle(value),
      this.searchDescription(value),
    ]);
    fork.subscribe(result => {
      const commonResult = result[0].concat(result[1]);
      for (let i = 0; i < commonResult.length; i++) {
        if (!coursesItems.find(item => item.id === commonResult[i].id)) {
          coursesItems.push(commonResult[i]);
        }
      }
    });
    return coursesItems;
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
