import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.module';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css'],
})
export class CoursesListItemComponent implements OnInit {
  @Input() public coursesItem: CoursesListItem;
  @Output() public onDeleteButtonItemClick: EventEmitter<number> = new EventEmitter<number>();

  onDelButClick() {
    this.onDeleteButtonItemClick.emit();
  }

  constructor() {}

  ngOnInit() {}
}
