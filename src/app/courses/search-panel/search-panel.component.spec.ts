import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPanelComponent } from './search-panel.component';
import { FormsModule } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';

describe('SearchPanelComponent', () => {
  let component: SearchPanelComponent;
  let fixture: ComponentFixture<SearchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPanelComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('shoulde create SearchComp', () => {
    expect(component).toBeTruthy();
  });

  describe('When onSearchButtonClick is called', () => {
    it('should onSearchButtonItemClick call service method', () => {
      const service = fixture.debugElement.injector.get(CoursesService);
      const spy = spyOn(service, 'changeSearchValue');
      component.onSearchButtonClick();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('When onAddCourseButtonClick is called', () => {
    it('should onAddCourseButtonClick call service method', () => {
      const service = fixture.debugElement.injector.get(CoursesService);
      const spy = spyOn(service, 'addCourseItem');
      component.onAddCourseButtonClick();
      expect(spy).toHaveBeenCalled();
    });
  });
});
