import {
  Component,
  OnInit,
  forwardRef,
  OnDestroy,
  Output,
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ControlValueAccessor,
  Validator,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { CustomValidators } from '../custom-validators';
import { Subject, Subscription } from 'rxjs';
import { EventEmitter } from 'events';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-authors-select',
  templateUrl: './authors-select.component.html',
  styleUrls: ['./authors-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsSelectComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorsSelectComponent),
      multi: true,
    },
  ],
})
export class AuthorsSelectComponent
  implements ControlValueAccessor, Validator, OnInit, OnDestroy {
  constructor(private customValidators: CustomValidators) {}

  public value = '';
  public authors = [];
  private sub: Subscription;
  private stream$: Subject<string> = new Subject<string>();
  @Output() public onSearch = new EventEmitter();

  validate(control: FormControl): ValidationErrors {
    return this.customValidators.correctAuthors(control);
  }

  public inputOnChange = (value: any) => {};

  writeValue(value): void {
    console.log(value);
    this.authors = value;
  }
  registerOnChange(fn: any): void {
    this.inputOnChange = fn;
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  onChange() {
    this.inputOnChange(this.authors);
  }
  onSearchKeyUp(value) {
    this.stream$.next(value);
  }
  ngOnInit() {
    this.sub = this.stream$.pipe(debounceTime(1000)).subscribe(value => {
      this.onSearch.emit(value);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
