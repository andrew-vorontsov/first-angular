import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  public searchValue: string;

  constructor(private coursesService: CoursesService) {}

  onSearchButtonClick() {
    this.coursesService.changeSearchValue(this.searchValue);
  }

  onAddCourseButtonClick() {
    this.coursesService.addCourseShow = !this.coursesService.addCourseShow;
    this.coursesService.addCourseItem();
  }
}
