import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menumodulos',
  templateUrl: './menumodulos.component.html',
  styleUrls: ['./menumodulos.component.scss']
})
export class MenumodulosComponent implements OnInit {
  
  cookieValue: string | undefined;

  constructor(private router: Router) { }

  cookieService = inject(CookieService);  //instead of constructor(private cookieService: CookieService) { }
  
  
  currentStage=0;

  audio = new Audio();
 

  ngOnInit(): void {

    this.audio.src = "../../assets/audio/676302__rubberduck9999__droid-beep-01.flac";
    this.audio.load();

    //this.cookieService.set('currentStage', '0');
  //this.cookieValue = this.cookieService.get('Test');

    //this.currentStage= this.cookieService.get('currentStage')?parseInt(this.cookieService.get('currentStage')):5;
    this.currentStage= localStorage.getItem('cursos')?parseInt(localStorage.getItem('cursos')!):-1;
    if(this.currentStage==-1){
      this.router.navigate(["intro/one"], { skipLocationChange: true});
    }

  }


  gotomodulo(){
    console.log('goto modulo');
  }

  getRouterLink(requiredStage: number, link: string) {
    //return this.currentStage < requiredStage ? null : link;
    this.currentStage < requiredStage-1 ? null : this.router.navigate([link], { skipLocationChange: true});
  }

  playSound(){
   // console.log('play sound')
    this.audio.play();
  }

}
