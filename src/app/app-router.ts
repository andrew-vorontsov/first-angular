import { Route, RouterLink } from '@angular/router';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { LoginComponent } from './login-page/login/login.component';

export const ROUTES: Route[] = [
  { path: 'courses-page', component: CoursesListComponent },
  { path: 'login-page', component: LoginComponent },
  { path: '', redirectTo: 'LoginComponent', pathMatch: 'full' },
];
