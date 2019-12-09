import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { ListComponent } from '../list/list.component';
import { SearchPanelComponent } from '../search-panel/search-panel.component';
import { CoursesFilterPipe } from 'src/app/pipes/courses-filter.pipe';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';
import { CoursesListItemComponent } from '../courses-list-item/courses-list-item.component';
import { FormsModule } from '@angular/forms';
import { CoursesBorderDirective } from 'src/app/directives/courses-border.directive';
import { DurationPipe } from 'src/app/pipes/duration.pipe';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesListComponent,
        ListComponent,
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

  it('shoulde create CoursesListComponent', () => {
    expect(component).toBeTruthy();
  });
});
