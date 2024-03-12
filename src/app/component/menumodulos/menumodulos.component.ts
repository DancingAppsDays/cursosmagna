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

  ngOnInit(): void {

    //this.cookieService.set('currentStage', '0');
  //this.cookieValue = this.cookieService.get('Test');
    this.currentStage= this.cookieService.get('currentStage')?parseInt(this.cookieService.get('currentStage')):4;

    if(this.currentStage==0){
      this.router.navigate(["intro/one"], { skipLocationChange: true});
    }

  }


  gotomodulo(){
    console.log('goto modulo');
  }

  getRouterLink(requiredStage: number, link: string) {
    return this.currentStage < requiredStage ? null : link;
  }

}
