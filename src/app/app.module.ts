import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { FormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app-router';
import { LoginComponent } from './login-page/login/login.component';
import { LoginModule } from './login-page/login.module';
import { EditPageComponent } from './edit-page/edit-page.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CoursesModule,
    LoginModule,
    FormsModule,
    UsersModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
