import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  @Output() public onSearchButtonItemClick : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public searchValue: string = '';

  onSearchButtonClick() {
    this.onSearchButtonItemClick.emit(this.searchValue);
  }

  ngOnInit() {
  }

}
