import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent implements OnInit, OnDestroy {
  @Output() public onSearchClick = new EventEmitter();
  public form: FormGroup;
  private sub: Subscription;
  private stream$: Subject<string> = new Subject<string>();

  constructor(private router: Router) {}

  onSearchButtonClick() {
    if (this.form.value.searchValue.length >= 3) {
      this.stream$.next(this.form.value.searchValue);
    }
  }

  onAddCourseButtonClick() {
    this.router.navigate(['/courses/new']);
  }

  ngOnInit() {
    this.form = new FormGroup({
      searchValue: new FormControl(),
    });
    this.sub = this.stream$.pipe(debounceTime(1000)).subscribe(value => {
      this.onSearchClick.emit(value);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
