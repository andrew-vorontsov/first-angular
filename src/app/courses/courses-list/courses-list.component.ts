import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.module';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public coursesItems: CoursesListItem[] = []

  constructor(private coursesService : CoursesService) { }

  ngOnInit() {
      this.coursesItems = this.coursesService.getCoursesItems();
      this.coursesItems.map((item) => {
        let duration = item.duration;
        if(duration/1000/60 > 59) {
          item.duration = duration/1000/3600;
        } else {
          item.duration = duration/1000/60
        }
    });
  };
}
