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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CoursesModule,
    FormsModule,
    UsersModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
