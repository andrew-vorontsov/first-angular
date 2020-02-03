import {
  Component,
  OnInit,
  forwardRef,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
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

  @Input() public authorsList;
  @Output() public onSearch = new EventEmitter();
  public value = '';
  public authors = [];
  private sub: Subscription;
  private stream$: Subject<string> = new Subject<string>();
  public validState = {
    valid: false,
    touched: false,
  };

  public inputOnChange = (value: any) => {};
  public inputOnTouch = () => {};

  validate(control: FormControl): ValidationErrors {
    setTimeout(() => {
      this.validState.valid = control.status === 'VALID' ? true : false;
    }, 0);
    return this.customValidators.correctAuthors(control);
  }

  writeValue(authors): void {
    this.authors = authors;
  }

  registerOnChange(fn: any): void {
    this.inputOnChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.inputOnTouch = fn;
  }

  sliceAuthorName(name) {
    return name.match(/^\S+/)[0];
  }

  onSearchKeyUp(value) {
    if (value.length > 1) {
      this.stream$.next(value);
    }
  }

  searchBlur() {
    setTimeout(() => {
      this.authorsList = [];
      this.value = '';
      this.validState.touched = true;
      this.inputOnTouch();
    }, 300);
  }

  setAuthorToInput(user) {
    if (!this.authors.find(item => item === user)) {
      this.authors.push(user);
      this.inputOnChange(this.authors);
    }
  }

  deleteAuthorFromInput(index) {
    this.authors.splice(index, 1);
    this.inputOnChange(this.authors);
  }

  ngOnInit() {
    this.sliceAuthorName('andrew vorn');
    this.sub = this.stream$.pipe(debounceTime(500)).subscribe(value => {
      this.onSearch.emit(value);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
