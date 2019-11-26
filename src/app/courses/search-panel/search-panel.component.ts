import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css'],
})
export class SearchPanelComponent implements OnInit {
  @Output() public onSearchButtonItemClick: EventEmitter<
    string
  > = new EventEmitter<string>();
  private searchValue: string;

  constructor() {}

  onSearchButtonClick() {
    this.onSearchButtonItemClick.emit(this.searchValue);
  }

  ngOnInit() {}
}
