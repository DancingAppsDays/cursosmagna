import { Component, TemplateRef, inject } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { routeTransitionAnimations } from './route-transition-animations';
import { ToastServiceService } from './service/toast-service.service';
import { Constants } from './constants';

//import { NgbToast } from '@ng-bootstrap/ng-bootstrap';

@Component({
 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
  //imports:[NgbToast]
  animations: [routeTransitionAnimations]//[slideInAnimation]
})

export class AppComponent {
  title = 'cursoquiz';
  navbarCollapsed = true;
  bannerImage: string="";


  successTpl={Header:"Progreso del curso",Body:"Adelante Con la siguiente sección" };


  toastService = inject(ToastServiceService);
  //constructor (private contexts: ChildrenOutletContexts){}

   // getRouteAnimationData() {
   //   return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  // }


  constructor(private router: Router) {}  //used for banner image

  ngOnInit() {
    this.setbannerImage();

    //this.home();

  }

  home() {

   if (sessionStorage.getItem('isGuest') === 'true' || sessionStorage.getItem('isuser') === 'true'){
      // The user is a guest
      this.router.navigate(['/menumodulo'],{ skipLocationChange: true});
 
    } else {
      if(Constants.usertype=="admin"){
        this.router.navigate(['/menuadmin'],{ skipLocationChange: true});
      }
        else if(Constants.usertype=="user"){
               this.router.navigate(['/menumodulo'],{ skipLocationChange: true});
        }else
      this.router.navigate(['/login1'],{ skipLocationChange: true});
      // The user is not a guest
    }
   }
navigate() {
  this.home();
  //this.router.navigate(['/menumodulo'],{ skipLocationChange: true});
}



setbannerImage() {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      if (event.urlAfterRedirects.startsWith('/cursotest')) {
        console.log("/cursotest/*");
        this.bannerImage = "/assets/Banners/MAGNA-banner1.1.png";
      } else if (event.urlAfterRedirects.startsWith('/curso1.2')) {
        console.log("/curso1.2/*");
        this.bannerImage ="/assets/Banners/MAGNA-banner1.2.png";
      }else if (event.urlAfterRedirects.startsWith('/curso1.3')) {
        console.log("/curso1.2/*");
        this.bannerImage ="/assets/Banners/MAGNA-banner1.3.png";
      } else if (event.urlAfterRedirects.startsWith('/curso1.4')) {
        console.log("/curso1.2/*");
        this.bannerImage ="/assets/Banners/MAGNA-banner1.4.png";
      }else {
        //console.log("DEFAULT");
        this.bannerImage = "assets//MAGNALOGO.png";
      }
    }
  });
}






    prepareRoute(outlet: RouterOutlet) {
      return outlet && 
        outlet.activatedRouteData && 
        outlet.activatedRouteData['animationState'];
     }
    
  
     toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
    }


   /* showSuccess({Header,Body,Progreso}:any){//]   template: TemplateRef<any>) {
      this.toastService.show(Header,Body,Progreso);
      console.log(Header + " " + Body)
      //   { template, classname: 'bg-success text-light', delay: 10000 });
    }
  */

    ngOnDestroy(): void {
      this.toastService.clear();
    }

}
