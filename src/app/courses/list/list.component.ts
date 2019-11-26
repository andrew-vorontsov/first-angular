import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() public courses: CoursesListItem;

  onDeleteButtonClick(item) {
    console.log('Delete video course ' + item.id);
  }

  onShowmoreClick(event) {
    console.log('onShowmoreclick!');
  }

  constructor() {}

  ngOnInit() {}
}
