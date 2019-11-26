import { Route } from '@angular/router';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';

export const ROUTES: Route[] = [
  { path: 'courses-page', component: CoursesListComponent },
  { path: '', redirectTo: 'courses-page', pathMatch: 'full' },
];
