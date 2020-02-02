import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Person } from 'src/app/shared/person.module';
import { AuthService } from 'src/app/services/auth-service.';
import { StorageService } from 'src/app/services/local-storage.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let user: Person;
  let authServiceMock: Partial<AuthService>;
  const localStorageService = jasmine.createSpyObj('StorageService', [
    'getLocStorage',
    'setTokenToLocStorage',
    'cleanLocStorage',
  ]);
  localStorageService.getLocStorage.and.returnValue('bob');

  authServiceMock = {
    isAuthenticated: () => true,
    logout: () => {},
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: StorageService, useValue: localStorageService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When HeaderComponent is onload', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('shoulde call isAuth method', () => {
      const authService = TestBed.get(AuthService);
      const spy = spyOn(authService, 'isAuthenticated');
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

    describe('When ngOnInit is run', () => {
      it('should receiving userNameFromToken value', () => {
        expect(component.setUserName()).toEqual('bob');
      });
    });
  });

  describe('When onLogoffClick is called', () => {
    it('should assign auth value with false', () => {
      const authService = TestBed.get(AuthService);
      const spy = spyOn(authService, 'logout');
      component.onLogoffClick();
      expect(spy).toHaveBeenCalled();
    });
  });
});
