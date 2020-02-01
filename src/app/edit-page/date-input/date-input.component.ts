import { Component, forwardRef, Input } from '@angular/core';
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
  public validState = {
    valid: false,
    touched: false,
  };

  validate(control: FormControl): ValidationErrors {
    setTimeout(() => {
      this.validState.valid = control.status === 'VALID' ? true : false;
    }, 0);
    return this.customValidators.correctDate(control);
  }

  public inputOnChange = (value: any) => {};
  public inputOnTouch = () => {};

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.inputOnChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.inputOnTouch = fn;
  }
  onChange() {
    this.inputOnChange(this.value);
  }
  onBlur() {
    this.inputOnTouch();
    this.validState.touched = true;
  }
}
