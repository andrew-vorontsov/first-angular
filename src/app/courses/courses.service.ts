import { Injectable } from '@angular/core';
import { CoursesListItem } from './courses-list-item.module';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  // public coursesDates: Date[] = [
  //   new Date(2019,1,3),
  //   new Date(2014,6,5),
  //   new Date(2016,5,8)
  // ]

  public getCoursesItems() : CoursesListItem[] {

    // let coursesDa = this.coursesDates.map((item) => {
    //   return (`${item.getDay()}.${item.getMonth()}.${item.getFullYear()}`);
    // });

    return [
      {
        id : 1,
        title: 'Video course 1',
        creationDate: 1573493111111,
        duration: 1000*60*20,
        description: 'This is an awesome video!',
      },
      {
        id : 2,
        title: 'Video course 2',
        creationDate: 1573193111111,
        duration: 1000*60*35,
        description: 'This is an awesome video!',
      },
      {
        id : 3,
        title: 'Video course 3',
        creationDate: 1573041122222,
        duration: 1000*60*75,
        description: 'This is an awesome video!',
      }
    ]
  }
}
