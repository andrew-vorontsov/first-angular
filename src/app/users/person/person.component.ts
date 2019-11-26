import { Component, OnInit } from '@angular/core';
import { Person } from '../person.module';
import { Constants } from 'common/constants';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  public personsStatic = new Constants();

  public persons: Person[] = this.personsStatic.persons;

  constructor() {}

  ngOnInit() {}
}
