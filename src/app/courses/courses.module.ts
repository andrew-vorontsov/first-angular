import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { CoursesBorderDirective } from '../directives/courses-border.directive';
import { DurationPipe } from '../pipes/duration.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { FormsModule } from '@angular/forms';
import { CoursesFilterPipe } from '../pipes/courses-filter.pipe';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
    SearchPanelComponent,
    CoursesBorderDirective,
    ListComponent,
    DurationPipe,
    OrderByPipe,
    CoursesFilterPipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CoursesListComponent,
    CoursesListItemComponent,
    SearchPanelComponent,
  ],
})
export class CoursesModule {}
