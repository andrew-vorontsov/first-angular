import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { LoginModule } from './login-page/login.module';
import { AuthService } from './services/auth-service.';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [CoreModule, CoursesModule, LoginModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create AppComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('When isAuth is called', () => {
    it('should assign auth value', () => {
      const service = fixture.debugElement.injector.get(AuthService);
      const spy = spyOn(service, 'isAuthenticated');
      component.isAuth();
      expect(spy).toHaveBeenCalled();
    });
  });
});
