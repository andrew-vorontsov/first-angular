import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { SearchPanelComponent } from '../../core/search-panel/search-panel.component';
import { CoursesFilterPipe } from 'src/app/pipes/courses-filter.pipe';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';
import { CoursesListItemComponent } from '../courses-list-item/courses-list-item.component';
import { FormsModule } from '@angular/forms';
import { CoursesBorderDirective } from 'src/app/directives/courses-border.directive';
import { DurationPipe } from 'src/app/pipes/duration.pipe';
import { AuthService } from 'src/app/services/auth-service.';
import { CoursesService } from 'src/app/services/courses.service';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesListComponent,
        SearchPanelComponent,
        CoursesListItemComponent,
        CoursesFilterPipe,
        OrderByPipe,
        DurationPipe,
        CoursesBorderDirective,
      ],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('when CoursesListComponent onload', () => {
    it('should create CoursesListComponent', () => {
      expect(component).toBeTruthy();
    });

    it('should assign auth value', () => {
      const service = fixture.debugElement.injector.get(AuthService);
      expect(component.auth).toEqual(service.isAuthenticated());
    });

    it('should assign coursesItems values', () => {
      const service = fixture.debugElement.injector.get(CoursesService);
      expect(component.coursesItems).toEqual(service.getCoursesItems());
    });
  });
});
