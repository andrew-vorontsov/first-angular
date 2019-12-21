import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  public searchValue: string;

  constructor(private coursesService: CoursesService, private router: Router) {}

  onSearchButtonClick() {
    this.coursesService.changeSearchValue(this.searchValue);
  }

  onAddCourseButtonClick() {
    this.router.navigate(['/courses/new']);
  }
}
