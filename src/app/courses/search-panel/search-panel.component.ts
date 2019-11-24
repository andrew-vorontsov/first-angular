import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  @Input() public searchValue: string = '';
  @Output() public onSearchButtonItemClick : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onSearchButtonClick() {
    this.onSearchButtonItemClick.emit(this.searchValue);
  }

  ngOnInit() {
  }

}
