import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';
import { CoursesListItemComponent } from '../courses-list-item/courses-list-item.component';
import { DurationPipe } from 'src/app/pipes/duration.pipe';
import { CoursesBorderDirective } from 'src/app/directives/courses-border.directive';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

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
    fixture.detectChanges();
  });

  it('shoulde create ListComp', () => {
    expect(component).toBeTruthy();
  });
});
