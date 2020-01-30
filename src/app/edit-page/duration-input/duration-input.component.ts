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
  validate(control: FormControl): ValidationErrors {
    return this.customValidators.correctDuration(control);
  }
  public inputOnChange = (value: any) => {};

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
}
