import { Component, Input, Output } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.module';
import { CoursesService } from '../../services/courses.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() public courses: CoursesListItem[];
  public getId;

  constructor(private coursesService: CoursesService) {}

  onDeleteButtonClick(item) {
    console.log(item.id);
    this.getId = item.id;
  }

  onEditButtonClick(item) {
    this.coursesService.updateItem(item.id);
  }

  onShowmoreClick(event) {
    console.log('onShowmoreclick!');
  }
}
