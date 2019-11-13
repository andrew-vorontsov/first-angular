import { Component, OnInit } from '@angular/core';
import { Person } from '../person.module';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public persons : Person[] = [
    {id: 1, firstname: "bob", lastname: 'smith'},
    {id: 2, firstname: 'maria', lastname: 'wolf'},
    {id: 3, firstname: 'habib', lastname: 'nurmur'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
