import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [CoursesListComponent, CoursesListItemComponent],
  imports: [CommonModule, SharedModule, CoreModule],
  exports: [CoursesListComponent],
  providers: [],
})
export class CoursesModule {}
