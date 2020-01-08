import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  @Output() public onSearchClick = new EventEmitter<string>();
  public searchValue = '';

  constructor(private router: Router) {}

  onSearchButtonClick(value) {
    if (value.length >= 3 || !value) {
      this.onSearchClick.emit(value);
    }
  }

  onAddCourseButtonClick() {
    this.router.navigate(['/courses/new']);
  }
}
