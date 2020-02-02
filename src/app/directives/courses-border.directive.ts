import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { currentDate, twoWeeksAgoDate } from 'common/constants';

@Directive({
  selector: '[appCoursesBorderDirective]',
})
export class CoursesBorderDirective implements OnInit {
  @Input() creationDate: number;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (
      this.creationDate < currentDate &&
      this.creationDate >= twoWeeksAgoDate
    ) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'border-color',
        'rgb(0, 109, 67)'
      );
    }
    if (this.creationDate > currentDate) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'border-color',
        'rgb(0, 103, 151)'
      );
    }
  }
}
