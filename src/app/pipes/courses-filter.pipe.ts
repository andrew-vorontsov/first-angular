import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coursesFilter',
})
export class CoursesFilterPipe implements PipeTransform {
  transform(coursesItems, searchValue) {
    if (searchValue === '') {
      return coursesItems;
    }
    coursesItems = coursesItems.filter(item => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    return coursesItems;
  }
}
