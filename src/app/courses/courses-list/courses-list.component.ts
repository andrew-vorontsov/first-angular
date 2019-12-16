import { Component, OnInit, ViewChild } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.module';
import { CoursesService } from '../../services/courses.service';
import { AuthService } from '../../services/auth-service.';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  public coursesItems: CoursesListItem[] = [];
  public searchValue = '';
  public auth: boolean;

  @ViewChild(ListComponent, { static: false })
  private listComponent: ListComponent;

  onSearchButtonFilterClick(searchValue) {
    this.searchValue = searchValue;
  }

  deleteItem() {
    if (this.listComponent.getId) {
      console.log('click');
      this.coursesService.deleteItem(this.listComponent.getId);
    }
  }

  constructor(
    private coursesService: CoursesService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.coursesItems = this.coursesService.getCoursesItems();
    this.auth = this.authService.isAuthenticated();
  }
}
