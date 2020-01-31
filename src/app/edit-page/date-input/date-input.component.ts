import { Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator,
  ValidationErrors,
  FormControl,
} from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  styles: [
    `
      :host {
        border: 1px solid #000;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    },
  ],
})
export class DateInputComponent implements ControlValueAccessor, Validator {
  constructor(private customValidators: CustomValidators) {}
  public value = '';

  validate(control: FormControl): ValidationErrors {
    return this.customValidators.correctDate(control);
  }

  public inputOnChange = (value: any) => {};
  public inputOnTouch = (value: any) => {};

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.inputOnChange = fn;
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  onChange() {
    this.inputOnChange(this.value);
  }
  reg() {
    this.inputOnTouch(null);
  }
}
