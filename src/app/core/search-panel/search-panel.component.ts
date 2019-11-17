import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

  constructor() { }

  public searchValue = '';

  onSearchButtonClick(value) {
    this.searchValue = value;
    console.log(this.searchValue)
  }

  ngOnInit() {
  }

}
