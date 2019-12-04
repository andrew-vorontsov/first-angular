import { Component, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  @Output() public onSearchButtonItemClick: EventEmitter<
    string
  > = new EventEmitter<string>();

  private searchValue: string;

  constructor(private coursesService: CoursesService) {}

  onSearchButtonClick() {
    this.onSearchButtonItemClick.emit(this.searchValue);
  }

  onAddCourseButtonClick() {
    this.coursesService.addCourseItem();
  }
}
