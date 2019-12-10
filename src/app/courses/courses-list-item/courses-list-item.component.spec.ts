import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';
import { CoursesBorderDirective } from 'src/app/directives/courses-border.directive';
import { DurationPipe } from 'src/app/pipes/duration.pipe';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';
import { CoursesFilterPipe } from 'src/app/pipes/courses-filter.pipe';
import { CoursesListItem } from '../courses-list-item.module';

describe('CoursesListItemComponent', () => {
  let component: CoursesListItemComponent;
  let fixture: ComponentFixture<CoursesListItemComponent>;
  let onDeleteButtonItemClick: any;
  let onEditButtonItemClick: any;
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

  describe('when onDelClick is called', () => {
    beforeEach(() => {
      onDeleteButtonItemClick = {
        emit: () => {},
      };
    });

    it('shoulde create CoursesListItemComponent', () => {
      expect(component).toBeTruthy();
    });

    it('shoulde onDeleteButtonItemClick is emit data', () => {
      spyOn(onDeleteButtonItemClick, 'emit');
      component.onDeleteButtonItemClick = onDeleteButtonItemClick;
      component.onDelClick();
      expect(onDeleteButtonItemClick.emit).toHaveBeenCalled();
    });
  });

  describe('When onEditClick is called', () => {
    beforeEach(() => {
      onEditButtonItemClick = {
        emit: () => {},
      };
    });

    it('should onEditButtonClick is emit data', () => {
      spyOn(onEditButtonItemClick, 'emit');
      component.onEditButtonItemClick = onEditButtonItemClick;
      component.onEditClick();
      expect(onEditButtonItemClick.emit).toHaveBeenCalled();
    });
  });
});
