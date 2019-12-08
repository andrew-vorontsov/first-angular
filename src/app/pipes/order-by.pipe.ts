import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(coursesItems) {
    function compare(a, b) {
      let comparison = 0;
      return (comparison = a.creationDate < b.creationDate ? 1 : -1);
    }
    if (coursesItems) {
      return coursesItems.sort(compare);
    }
  }
}
