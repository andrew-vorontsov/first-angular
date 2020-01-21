import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { delay, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public load = new Subject<boolean>();

  public start() {
    this.load.next(true);
  }

  public stop() {
    this.load.next(false);
  }
}
