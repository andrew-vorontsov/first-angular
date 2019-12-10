import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPanelComponent } from './search-panel.component';
import { FormsModule } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';

describe('SearchPanelComponent', () => {
  let component: SearchPanelComponent;
  let fixture: ComponentFixture<SearchPanelComponent>;
  let onSearchButtonItemClick: any;

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
    beforeEach(() => {
      onSearchButtonItemClick = {
        emit: () => {},
      };
    });

    it('should onSearchButtonItemClick is emit data', () => {
      spyOn(onSearchButtonItemClick, 'emit');
      component.onSearchButtonItemClick = onSearchButtonItemClick;
      component.onSearchButtonClick();
      expect(onSearchButtonItemClick.emit).toHaveBeenCalled();
    });
  });

  describe('When onAddCourseButtonClick is called', () => {
    it('should onAddCourseButtonClick is add data to service', () => {
      const service = fixture.debugElement.injector.get(CoursesService);
      const spy = spyOn(service, 'addCourseItem');
      component.onAddCourseButtonClick();
      expect(spy).toHaveBeenCalled();
    });
  });
});
