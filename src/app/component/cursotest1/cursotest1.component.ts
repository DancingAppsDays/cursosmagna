import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

import { timer } from 'rxjs';
import { routeTransitionAnimations } from 'src/app/route-transition-animations';

@Component({
  selector: 'app-cursotest1',
  templateUrl: './cursotest1.component.html',
  styleUrls: ['./cursotest1.component.scss'],
  animations: [routeTransitionAnimations]
})
export class Cursotest1Component implements OnInit {


  currenttimer!: string;

  currentslide=1;
  maxpage=20;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const source = timer(1000, 1000);
 
     source.subscribe(n => { this.currenttimer = new Date(n * 1000).toISOString().slice(11, 19)});
    
    
  }


  prepareRoute(outlet2: RouterOutlet) {
    return outlet2 && 
      outlet2.activatedRouteData && 
      outlet2.activatedRouteData['animationState'];
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





}
