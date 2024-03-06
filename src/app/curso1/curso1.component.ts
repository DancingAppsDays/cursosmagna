import { Component, OnInit } from '@angular/core';
import { RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { routeTransitionAnimations } from '../route-transition-animations';

@Component({
  selector: 'app-curso1',
  templateUrl: './curso1.component.html',
  styleUrls: ['./curso1.component.scss'],
  animations: [routeTransitionAnimations]
})
export class Curso1Component implements OnInit {

  currentpage!:number;
  maxpage!:number;


  starttimer!: Date;
  currenttimer!: string;

  maxtime=0;

  subscribe:any;
 

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const source = timer(1000, 1000);
//output: 0,1,2,3,4,5......
this.subscribe = source.subscribe(n => { this.currenttimer = new Date(n * 1000).toISOString().slice(11, 19)});





const section = document.querySelector('section');

let currentPos = window.scrollY;

const update = () => {
  const newPos = window.scrollY;
  const diff = newPos - currentPos;
  const speed = diff * 0.35;
  
  section!.style.transform = `skewY(${ speed }deg)`;
  
  currentPos = newPos;
  
  requestAnimationFrame(update);
}

update();





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

  routeTCHILD(){
   this.router.navigate(['routeshis'], {relativeTo:this.route});
  }




  Previous(){

  }
  Next(){

  }
  

  


}
