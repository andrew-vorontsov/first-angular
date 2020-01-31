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
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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

  public inputOnChange = (value: any) => {};

  validate(control: FormControl): ValidationErrors {
    return this.customValidators.correctAuthors(control);
  }

  writeValue(authors): void {
    this.authors = authors;
  }

  registerOnChange(fn: any): void {
    this.inputOnChange = fn;
  }

  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }

  onSearchKeyUp(value) {
    if (value.length > 2) {
      this.stream$.next(value);
    }
  }

  searchBlur() {
    setTimeout(() => {
      this.authorsList = [];
      this.value = '';
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
    this.sub = this.stream$.pipe(debounceTime(300)).subscribe(value => {
      this.onSearch.emit(value);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
