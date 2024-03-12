import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  audio = new Audio();

  constructor() {
    this.audio.src = "../../../assets/audio/678455__rubberduck9999__tripod-mechanical-sound-01.flac";
    this.audio.load();
   }

  ngOnInit(): void {
  }

  @HostListener('window:animationstart', ['$event'])
  onAnimationStart(event: AnimationEvent) {
    //console.log("animationstart", event);
    if (event.animationName === '_ngcontent-ng-c3956308324_enterleftanim' || event.animationName === '_ngcontent-ng-c3956308324_enterrightanim') {
      console.log("play audio");
      this.audio.play();
    }
  }
  
}
