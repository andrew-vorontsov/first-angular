import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.module';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public coursesItems: CoursesListItem[] = [
    {
      id : 1,
      title: 'Video course 1',
      creatonDate: '12.12.18',
      duration: 30,
      description: 'This is awesome video!',
    },
    {
      id : 2,
      title: 'Video course 2',
      creatonDate: '11.12.18',
      duration: 30,
      description: 'This is awesome video!',
    },
    {
      id : 3,
      title: 'Video course 3',
      creatonDate: '13.12.18',
      duration: 30,
      description: 'This is awesome video!',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
