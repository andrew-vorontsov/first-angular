import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { delay, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public loading = false;
}
