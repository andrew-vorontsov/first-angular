import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.module';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  public coursesItems: CoursesListItem[] = [];
  public searchValue: string = '';

  onSearchButtonFilterClick(searchValue) {
    this.searchValue = searchValue;
  }
  
  constructor(private coursesService : CoursesService) { }

  ngOnInit() {
      this.coursesItems = this.coursesService.getCoursesItems();
  };
}
