import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app-router';
import { LoginModule } from './login-page/login.module';
import { EditPageModule } from './edit-page/edit-page.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    EditPageModule,
    LoginModule,
    UsersModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
