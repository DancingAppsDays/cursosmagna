import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-c14p0',
  templateUrl: './c14p0.component.html',
  styleUrls: ['./c14p0.component.scss']
})
export class C14p0Component implements OnInit {

  audio = new Audio();

  constructor() {
    this.audio.src = "../../../assets/audio/678455__rubberduck9999__tripod-mechanical-sound-01.flac";
    this.audio.load();
   }

  ngOnInit(): void {
  }

  @HostListener('window:animationstart', ['$event'])
  onAnimationStart(event: AnimationEvent) {
    console.log("animationstart", event);
    if (event.animationName === 'enterleftanim' || '_ngcontent-ng-c3956308324_enterleftanim' || event.animationName === '_ngcontent-ng-c3956308324_enterrightanim') {
      console.log("play audio");
      this.audio.play();
    }
  }
}
