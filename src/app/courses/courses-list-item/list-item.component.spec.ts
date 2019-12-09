import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';
import { CoursesListItem } from '../courses-list-item.module';

describe('CoursesListItemComponent', () => {
  const component = new CoursesListItemComponent();
  const coursesItem: CoursesListItem = {
    id: 1,
    title: `first course`,
    creationDate: 1575793111111,
    duration: 1000 * 60 * 20,
    description: 'This is an awesome video!',
    topRated: true,
  };

  beforeEach(() => {
    component.coursesItem = coursesItem;
  });

  it('shoulde create ListItem', () => {
    expect(component).toBeTruthy();
  });
});
