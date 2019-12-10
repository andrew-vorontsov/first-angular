import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Person } from 'src/app/users/person.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let user: Person;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When setNameFromLocalStore is called', () => {
    beforeEach(() => {
      user = {
        id: -1,
        firstname: 'test',
        lastname: '',
      };
    });

    it('should setNameFromLocalStore return user firstname', () => {
      localStorage.setItem('userInfo', JSON.stringify(user));
      expect(component.getNameFromLocalStore()).toEqual(
        JSON.parse(localStorage.getItem('userInfo')).firstname
      );
    });
  });
});
