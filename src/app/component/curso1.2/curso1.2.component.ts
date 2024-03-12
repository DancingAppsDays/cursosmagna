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

  currentslide=1;
  maxpage=3;
  audio = new Audio();

  isnextready=true;

  constructor(private route: ActivatedRoute, private router: Router,private nextslideService: NextslideService) { 

    this.audio.src = "../../../assets/audio/676302__rubberduck9999__droid-beep-01.flac";
    this.audio.load();
  }

  ngOnInit(): void {
  
    //this.routeToChild("one")
    const source = timer(1000, 1000);
 
     source.subscribe(n => { this.currenttimer = new Date(n * 1000).toISOString().slice(11, 19)});
    
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


  routeToChild(route:string){
   this.router.navigate([route], {relativeTo:this.route, skipLocationChange: true});
  }




  Previous(){

    this.nextslideService.changeIsNextReady(true);
    if(this.currentslide<=1)return;

    this.currentslide--;

    
    switch(this.currentslide){
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
    }

    //window.scrollTo(0, 0);
    document.getElementById('revbutton')?.scrollIntoView();

  }
  Next(){

    if(this.currentslide>=this.maxpage)return;
   
    this.currentslide++;
    this.audio.play();

    switch(this.currentslide){
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
    }
    //window.scrollTo(0, 0);
    document.getElementById('revbutton')?.scrollIntoView();
  }





}
