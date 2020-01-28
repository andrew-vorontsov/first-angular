import { NgModule } from '@angular/core';
import { EditPageComponent } from './edit-page.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [EditPageComponent],
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
