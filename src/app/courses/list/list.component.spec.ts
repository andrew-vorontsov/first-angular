import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';
import { CoursesListItemComponent } from '../courses-list-item/courses-list-item.component';
import { DurationPipe } from 'src/app/pipes/duration.pipe';
import { CoursesBorderDirective } from 'src/app/directives/courses-border.directive';
import { CoursesService } from 'src/app/services/courses.service';
import { CoursesListItem } from '../courses-list-item.module';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let coursesService: CoursesService;
  let coursesItem: CoursesListItem;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent,
        CoursesListItemComponent,
        OrderByPipe,
        DurationPipe,
        CoursesBorderDirective,
      ],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    coursesService = fixture.debugElement.injector.get(CoursesService);
    fixture.detectChanges();
  });

  describe('when ListComp onload', () => {
    it('should create ListComp', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('when onDeleteButtonClick is called', () => {
    beforeEach(() => {
      coursesItem = {
        id: 1,
        title: `first course`,
        creationDate: 1575793111111,
        duration: 1000 * 60 * 20,
        description: 'This is an awesome video!',
        topRated: true,
      };
    });
    it('should call deleteItem method', () => {
      const spy = spyOn(coursesService, 'deleteItem');
      component.onDeleteButtonClick(coursesItem);
      expect(spy).toHaveBeenCalled();
    });
    it('should call updateItem method', () => {
      const spy = spyOn(coursesService, 'updateItem');
      component.onEditButtonClick(coursesItem);
      expect(spy).toHaveBeenCalled();
    });
  });
});
