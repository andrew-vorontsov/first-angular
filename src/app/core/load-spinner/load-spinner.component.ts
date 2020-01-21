import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from 'src/app/services/loading-service';
import { debounceTime, delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-load-spinner',
  templateUrl: './load-spinner.component.html',
  styleUrls: ['./load-spinner.component.scss'],
})
export class LoadSpinnerComponent implements OnInit, OnDestroy {
  constructor(private loadingService: LoadingService) {}

  public onload = false;
  private sub: Subscription;

  ngOnInit() {
    this.sub = this.loadingService.load.subscribe(value => {
      this.onload = value;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
