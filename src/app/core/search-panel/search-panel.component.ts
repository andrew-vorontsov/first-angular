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

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent implements OnInit, OnDestroy {
  @Output() public onSearchClick = new EventEmitter();
  public searchValue;
  private sub: Subscription;
  private stream$: Subject<string> = new Subject<string>();

  constructor(private router: Router) {}

  onSearchButtonClick(value) {
    if (value.length >= 3) {
      this.stream$.next(value);
    }
  }

  onAddCourseButtonClick() {
    this.router.navigate(['/courses/new']);
  }

  ngOnInit() {
    this.sub = this.stream$.pipe(debounceTime(1000)).subscribe(value => {
      this.onSearchClick.emit(value);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
