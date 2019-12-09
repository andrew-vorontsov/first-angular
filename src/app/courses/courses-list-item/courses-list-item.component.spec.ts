import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';
import { CoursesBorderDirective } from 'src/app/directives/courses-border.directive';
import { DurationPipe } from 'src/app/pipes/duration.pipe';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';
import { CoursesFilterPipe } from 'src/app/pipes/courses-filter.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.module';

describe('CoursesListItemComponent', () => {
  let component: CoursesListItemComponent;
  let fixture: ComponentFixture<CoursesListItemComponent>;
  const coursesItem: CoursesListItem = {
    id: 1,
    title: `first course`,
    creationDate: 1575793111111,
    duration: 1000 * 60 * 20,
    description: 'This is an awesome video!',
    topRated: true,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesListItemComponent,
        CoursesBorderDirective,
        OrderByPipe,
        DurationPipe,
        CoursesFilterPipe,
      ],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListItemComponent);
    component = fixture.componentInstance;
    component.coursesItem = coursesItem;
    fixture.detectChanges();
  });

  it('shoulde create CoursesListItemComponent', () => {
    expect(component).toBeTruthy();
  });
});
