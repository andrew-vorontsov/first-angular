import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service.';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('shoulde create LoginComp', () => {
    expect(component).toBeTruthy();
  });

  describe('When onLoginClick is called', () => {
    it('should onLoginClick is change auth flag in authService', () => {
      const service = fixture.debugElement.injector.get(AuthService);
      const spy = spyOn(service, 'login');
      component.name = 'bob';
      component.onLoginClick();
      expect(spy).toHaveBeenCalled();
    });
  });
});
