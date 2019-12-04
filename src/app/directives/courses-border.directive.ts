import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { Constants } from 'common/constants';

@Directive({
  selector: '[appCoursesBorderDirective]',
})
export class CoursesBorderDirective implements OnInit {
  @Input() creationDate: number;

  private constants = new Constants();

  private currentDate = this.constants.currentDate;
  private twoWeeksAgoDate = this.constants.twoWeeksAgoDate;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (
      this.creationDate < this.currentDate &&
      this.creationDate >= this.twoWeeksAgoDate
    ) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'border-color',
        'green'
      );
    }
    if (this.creationDate > this.currentDate) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'border-color',
        'blue'
      );
    }
  }
}
