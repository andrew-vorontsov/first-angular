import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading-service';
import { delay, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private loadingService: LoadingService) {}

  public loading = this.loadingService.loading;

  ngOnInit() {
    console.log(this.loadingService.loading);
  }
}
