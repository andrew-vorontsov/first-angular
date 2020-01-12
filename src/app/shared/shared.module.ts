import { NgModule } from '@angular/core';
import { CoursesBorderDirective } from '../directives/courses-border.directive';
import { DurationPipe } from '../pipes/duration.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { CoursesFilterPipe } from '../pipes/courses-filter.pipe';

@NgModule({
  declarations: [
    CoursesBorderDirective,
    DurationPipe,
    OrderByPipe,
    CoursesFilterPipe,
  ],
  imports: [],
  exports: [
    CoursesBorderDirective,
    DurationPipe,
    OrderByPipe,
    CoursesFilterPipe,
  ],
})
export class SharedModule {}
