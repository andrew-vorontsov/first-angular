import { CoursesListComponent } from 'src/app/courses/courses-list/courses-list.component';
import { Route } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { EditPageComponent } from 'src/app/edit-page/edit-page.component';
import { LoginComponent } from 'src/app/login-page/login/login.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

const Paths = {
  courses: 'courses',
  login: 'login',
  notFound: 'not-found',
  id: '/:id',
  new: '/new',
};

export const ROUTES: Route[] = [
  {
    path: Paths.courses,
    component: CoursesListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: Paths.courses + Paths.id,
    component: EditPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: Paths.courses + Paths.new,
    component: EditPageComponent,
    canActivate: [AuthGuard],
  },
  { path: Paths.login, component: LoginComponent },
  { path: Paths.notFound, component: NotFoundComponent },
  { path: '', redirectTo: Paths.login, pathMatch: 'full' },
  { path: '**', redirectTo: Paths.notFound, pathMatch: 'full' },
];
