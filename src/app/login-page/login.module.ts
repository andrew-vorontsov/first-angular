import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule, FormsModule, CoreModule],
  exports: [LoginComponent],
})
export class LoginModule {}
