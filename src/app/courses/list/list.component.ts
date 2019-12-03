import { Component, OnInit, Input } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.module';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() public courses: CoursesListItem;

  constructor(private coursesService: CoursesService) {}

  onDeleteButtonClick(item) {
    this.coursesService.deleteItem(item.id);
  }

  onEditButtonClick(item) {
    this.coursesService.updateItem(item.id);
  }

  onShowmoreClick(event) {
    console.log('onShowmoreclick!');
  }

  ngOnInit() {}
}
