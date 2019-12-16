import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CoursesListItem } from '../courses-list-item.module';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListItemComponent {
  @Input() public coursesItem: CoursesListItem;
  @Output() public onDeleteButtonItemClick = new EventEmitter<number>();
  @Output() public onEditButtonItemClick = new EventEmitter<number>();

  onDelClick() {
    this.onDeleteButtonItemClick.emit();
  }

  onEditClick() {
    this.onEditButtonItemClick.emit();
  }

  constructor() {}
}
