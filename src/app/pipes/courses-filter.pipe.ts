import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coursesFilter'
})
export class CoursesFilterPipe implements PipeTransform {

  transform(coursesItems, str) {
    console.log(str)
    return coursesItems;
  }

}
