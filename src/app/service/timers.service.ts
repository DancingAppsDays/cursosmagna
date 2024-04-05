import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimersService {
  private timerSource = new BehaviorSubject<string>('00:00:00');
  currentTimer = this.timerSource.asObservable();

  constructor() { }

  changeTimer(time: string) {
    this.timerSource.next(time);
  }
}
