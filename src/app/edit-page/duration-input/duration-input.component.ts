import { Component, OnInit, forwardRef } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  NG_VALIDATORS,
  Validator,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true,
    },
  ],
})
export class DurationInputComponent implements ControlValueAccessor, Validator {
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
    return this.customValidators.correctDuration(control);
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
    this.validState.touched = true;
    this.inputOnTouch();
  }
}
