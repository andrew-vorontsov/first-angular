import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appCoursesBorderDirective]',
})
export class CoursesBorderDirective implements OnInit {
  @Input() creationDate: number;

  private currentTime = new Date().getTime();
  private twoWeeksTime = this.currentTime - 14 * 24 * 60 * 60 * 1000;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (
      this.creationDate < this.currentTime &&
      this.creationDate >= this.twoWeeksTime
    ) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'border-color',
        'green'
      );
    }
    if (this.creationDate > this.currentTime) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'border-color',
        'blue'
      );
    }
  }
}
