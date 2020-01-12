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
    if (value.length < 3) {
      alert('Введите 3 или более символов');
    } else {
      this.onSearchClick.emit(value);
      this.searchValue = '';
    }
  }

  onAddCourseButtonClick() {
    this.router.navigate(['/courses/new']);
  }
}
