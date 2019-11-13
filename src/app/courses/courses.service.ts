import { Injectable } from '@angular/core';
import { CoursesListItem } from './courses-list-item.module';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  public durations : number[] = [
    123214213,
    2132132131,
    2142132131
  ]

  // public duration() : string {
  //   let h = + 'sd'
  //   return h;
  // }

  public getCoursesItems() : CoursesListItem[] {

    return [
      {
        id : 1,
        title: 'Video course 1',
        creationDate: '10.12.18',
        duration: '23 min',
        description: 'This is an awesome video!',
      },
      {
        id : 2,
        title: 'Video course 2',
        creationDate: '11.12.18',
        duration: "45 min",
        description: 'This is an awesome video!',
      },
      {
        id : 3,
        title: 'Video course 3',
        creationDate: '13.12.18',
        duration: "23 min",
        description: 'This is an awesome video!',
      }
    ]
  }
}
