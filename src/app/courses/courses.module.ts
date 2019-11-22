import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { CoursesBorderDirective } from '../directives/courses-border.directive';



@NgModule({
  declarations: [CoursesListComponent, CoursesListItemComponent,  CoursesBorderDirective],
  imports: [
    CommonModule
  ],
  exports: [CoursesListComponent, CoursesListItemComponent]
})
export class CoursesModule { }
