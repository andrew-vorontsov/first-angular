import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Person } from 'src/app/users/person.module';
import { AuthService } from 'src/app/services/auth-service.';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let user: Person;
  let service: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(AuthService);
  });

  describe('When HeaderComponent is onload', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('shoulde call isAuth method', () => {
      const spy = spyOn(service, 'isAuthenticated');
      component.isAuth();
      expect(spy).toHaveBeenCalled();
    });
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

  describe('When onLogoffClick is called', () => {
    it('should assign auth value with false', () => {
      service.login('bob');
      const spy = spyOn(service, 'logout');
      component.onLogoffClick();
      expect(spy).toHaveBeenCalled();
    });
  });
});
