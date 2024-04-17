import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

import { routeTransitionAnimations } from 'src/app/route-transition-animations';
import { NextslideService } from 'src/app/service/nextslide.service';

import { timer } from 'rxjs';
//import { routeTransitionAnimations } from '../route-transition-animations';

@Component({
  selector: 'app-curso1.2',
  templateUrl: './curso1.2.component.html',
  styleUrls: ['./curso1.2.component.scss'],
  animations: [routeTransitionAnimations],
})
export class Curso12Component implements OnInit {


  currenttimer!: string;

  currentslide = 1;
  maxpage = 22;
  audio = new Audio();

  isnextready = true;

  constructor(private route: ActivatedRoute, private router: Router, private nextslideService: NextslideService) {

    this.audio.src = "../../../assets/audio/676302__rubberduck9999__droid-beep-01.flac";
    this.audio.load();
  }

  ngOnInit(): void {

    //this.routeToChild("one")
    const source = timer(1000, 1000);

    source.subscribe(n => { this.currenttimer = new Date(n * 1000).toISOString().slice(11, 19) });

    this.nextslideService.currentIsNextReady.subscribe(isNextReady => this.isnextready = isNextReady);
    this.nextslideService.changeIsNextReady(true);
  }

  prepareRoute(outlet: RouterOutlet) {
    //setTimeout(() => {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState'];
    // }, 110);
  }


  routeToChild(route: string) {
    this.router.navigate([route], { relativeTo: this.route, skipLocationChange: true });
  }




  Previous() {

    this.nextslideService.changeIsNextReady(true);
    if (this.currentslide <= 1) return;

    this.currentslide--;


    switch (this.currentslide) {
      case 1:
        this.routeToChild("one")
        break;
      case 2:
        this.routeToChild("two")
        break;
      case 3:
        this.routeToChild("three")
        break;
      case 4:
        this.routeToChild("four")
        break;
      case 5:
        this.routeToChild("five")
        break;
      case 6:
        this.routeToChild("six")
        break;
      case 7:
        this.routeToChild("seven")
        break;
      case 8:
        this.routeToChild("eight")
        break;
      case 9:
        this.routeToChild("nine")
        break;
      case 10:
        this.routeToChild("ten")
        break;
      case 11:
        this.routeToChild("eleven")
        break;
      case 12:
        this.routeToChild("twelve")
        break;
      case 13:
        this.routeToChild("thirteen")
        break;
      case 14:
        this.routeToChild("fourteen")
        break;
      case 15:
        this.routeToChild("fifteen")
        break;
      case 16:
        this.routeToChild("sixteen")
        break;
      case 17:
        this.routeToChild("seventeen")
        break;
      case 18:
        this.routeToChild("eighteen")
        break;
      case 19:
        this.routeToChild("nineteen")
        break;
      case 20:
        this.routeToChild("twenty")
        break;
      case 21:
        this.routeToChild("twentyone")
        break;
      case 22:
        this.routeToChild("twentytwo")
        break;
      case 23:
        this.routeToChild("twentythree")
        break;
    }

    //window.scrollTo(0, 0);
    document.getElementById('revbutton')?.scrollIntoView();

  }
  Next() {

    if (!this.isnextready) {
      return;
    }

    if (this.currentslide >= this.maxpage) {
      this.router.navigate(["menumodulo"], { skipLocationChange: true });
      return;
    };

    this.currentslide++;
    //this.audio.play();

    switch (this.currentslide) {
      case 1:
        this.routeToChild("one")
        break;
      case 2:
        this.routeToChild("two")
        break;
      case 3:
        this.routeToChild("three")
        break;
      case 4:
        this.routeToChild("four")
        break;

      case 5:
        this.routeToChild("five")
        break;
      case 6:
        this.routeToChild("six")
        break;
      case 7:
        this.routeToChild("seven")
        break;
      case 8:
        this.routeToChild("eight")
        break;
      case 9:
        this.routeToChild("nine")
        break;
      case 10:
        this.routeToChild("ten")
        break;
      case 11:
        this.routeToChild("eleven")
        break;
      case 12:
        this.routeToChild("twelve")
        break;
      case 13:
        this.routeToChild("thirteen")
        break;
      case 14:
        this.routeToChild("fourteen")
        break;
      case 15:
        this.routeToChild("fifteen")
        break;
      case 16:
        this.routeToChild("sixteen")
        break;
      case 17:
        this.routeToChild("seventeen")
        break;
      case 18:
        this.routeToChild("eighteen")
        break;
      case 19:
        this.routeToChild("nineteen")
        break;
      case 20:
        this.routeToChild("twenty")
        break;
      case 21:
        this.routeToChild("twentyone")
        break;
      case 22:
        this.routeToChild("twentytwo")
        break;
      case 23:
        this.routeToChild("twentythree")
        break;
    }
    //window.scrollTo(0, 0);
    document.getElementById('revbutton')?.scrollIntoView();
  }





}
