import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-c04intro',
  templateUrl: './c04intro.component.html',
  styleUrls: ['./c04intro.component.scss']
})
export class C04introComponent implements OnInit {


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
