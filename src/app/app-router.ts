import { Route, RouterLink } from '@angular/router';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { LoginComponent } from './login-page/login/login.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { AuthGuard } from './services/auth-guard.service';

export const ROUTES: Route[] = [
  {
    path: 'courses-page',
    component: CoursesListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'new-page', component: EditPageComponent, canActivate: [AuthGuard] },
  { path: 'login-page', component: LoginComponent },
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
];
