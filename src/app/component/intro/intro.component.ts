import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NextslideService } from 'src/app/service/nextslide.service';

import { timer } from 'rxjs';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

 
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

  
    this.routeToChild("one") //good for autorouting from menu.. bad for refresh slide



    const source = timer(1000, 1000);
 
     source.subscribe(n => { this.currenttimer = new Date(n * 1000).toISOString().slice(11, 19)});
    
     this.nextslideService.currentIsNextReady.subscribe(isNextReady => {this.isnextready = isNextReady; document.getElementById('slidecontainer')?.scrollIntoView();  console.log("CHANgeDDD")});
     this.nextslideService.changeIsNextReady(true);
    }

  prepareRoute(outlet: RouterOutlet) {
    //setTimeout(() => {
      return outlet && 
        outlet.activatedRouteData && 
        outlet.activatedRouteData['animationState'];
   // }, 110);
   }

   observableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      // this.subscribeTimer = this.timeLeft - val;
    });
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
    //this.router.navigate(["menumodulo"], { skipLocationChange: true});
    if(!this.isnextready) {
      return;
    }
    if(this.currentslide>=this.maxpage){
     // this.router.navigate(['../curso1.2'], {relativeTo:this.route, skipLocationChange: true});
     this.router.navigate(["menumodulo"], { skipLocationChange: true});
     return;
    };
   
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
