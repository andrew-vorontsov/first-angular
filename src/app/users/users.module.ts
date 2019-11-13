import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';



@NgModule({
  declarations: [PersonComponent],
  imports: [
    CommonModule
  ],
  exports: [PersonComponent]
})
export class UsersModule { }
