import { NgModule } from '@angular/core';
import { EditPageComponent } from './edit-page.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { DateInputComponent } from './date-input/date-input.component';
import { DurationInputComponent } from './duration-input/duration-input.component';

@NgModule({
  declarations: [EditPageComponent, DateInputComponent, DurationInputComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  exports: [EditPageComponent],
  providers: [],
})
export class EditPageModule {}
