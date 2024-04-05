import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NextslideService {

  // nextslidereadyService=false;
  /* . This is because each component instance has its own copy of the service instance, so changes are not reflected across components.
 
 On the other hand, a BehaviorSubject (which is a type of Observable) is a more sophisticated construct that can emit data over time. Components can subscribe to these observables and get updates whenever the data changes.
 
 In your case, the BehaviorSubject is used to hold the state of isNextReady. When isNextReady changes, the BehaviorSubject emits the new value to all subscribers.*/

  private isNextReadySource = new BehaviorSubject<boolean>(true);
  currentIsNextReady = this.isNextReadySource.asObservable();


  //for triggering next() method on "parent" routero

  private _nextSlide = new Subject<void>();
  nextSlide$ = this._nextSlide.asObservable();

  triggerNextSlide() {
    this._nextSlide.next();
  }


  constructor() { }

  changeIsNextReady(isNextReady: boolean) {
    this.isNextReadySource.next(isNextReady);
  }

}

