import { Component, TemplateRef, inject } from '@angular/core';
import { ChildrenOutletContexts, RouterLink, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { routeTransitionAnimations } from './route-transition-animations';
import { ToastServiceService } from './service/toast-service.service';
import { Constants } from './constants';

import { filter } from 'rxjs/operators';
import { Event as NavigationEvent, NavigationEnd, Router } from '@angular/router';

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
  bannerImage: string = "";


  successTpl = { Header: "Progreso del curso", Body: "Adelante Con la siguiente sección" };


  toastService = inject(ToastServiceService);
  //constructor (private contexts: ChildrenOutletContexts){}

  // getRouteAnimationData() {
  //   return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  // }

  constructor(private router: Router) {
    // Subscribe to navigation events
    /* this.router.events.pipe(
       filter((event: NavigationEvent) => event instanceof NavigationEnd)
     ).subscribe((event: NavigationEvent) => {
       if (event instanceof NavigationEnd) {
         console.log("currentRoute" + event.url);
         if (!event.url.includes('recoverpass') && !event.url.includes('resetpass')) {
           // Only call home() if the user is not on the recoverpass or resetpass route
           console.log(event.url);
 
           this.home();
         }
 
 
       }
     });*/
  }

  ngOnInit() {
    this.setbannerImage();




    //this.home();
    //THIS may be needed to redirect to the correct page after a refresh

    setTimeout(() => {
      this.homeAlternative();
    }, 1000);
    console.log("INITT")

  }

  homeAlternative() {
    // Get the current route
    const currentRoute = this.router.url;
    console.log(currentRoute);
    // Check if the current route includes 'resetpass' or 'recoverpass'
    if (!currentRoute.includes('resetpass') && !currentRoute.includes('recoverpass')) {
      // If it doesn't, navigate to the home route
      //this.router.navigate(['/']);
      this.home();
    }
  }

  home() {

    //console.log(this.router.url)


    if (sessionStorage.getItem('isGuest') === 'true' || sessionStorage.getItem('isGuest') === 'true') {
      // The user is a guest
      this.router.navigate(['/menumodulo'], { skipLocationChange: true });

    } else {
      if (Constants.usertype == "admin" || Constants.usertype == "superadmin") {
        console.log("admingoto");
        this.router.navigate(['/adminmenu'], { skipLocationChange: true });
      }
      else if (Constants.usertype == "user") {
        this.router.navigate(['/menumodulo'], { skipLocationChange: true });
      } else
        this.router.navigate(['/login1'], { skipLocationChange: true });
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
          //console.log("/cursotest/*");
          this.bannerImage = "/assets/Banners/MAGNA-banner1.1.png";
        } else if (event.urlAfterRedirects.startsWith('/curso1.2')) {
          //console.log("/curso1.2/*");
          this.bannerImage = "/assets/Banners/MAGNA-banner1.2.png";
        } else if (event.urlAfterRedirects.startsWith('/curso1.3')) {
          //console.log("/curso1.2/*");
          this.bannerImage = "/assets/newslides/MAGNA-modulo1.3ban.png";
        } else if (event.urlAfterRedirects.startsWith('/curso1.4')) {
          //console.log("/curso1.2/*");
          this.bannerImage = "/assets/Banners/MAGNA-banner1.4.png";
        } else if (event.urlAfterRedirects.startsWith('/curso2')) {
          console.log("/curso2/*");
          this.bannerImage = "/assets/Banners/MAGNA-banner2.1.png";
        } else if (event.urlAfterRedirects.startsWith('/curso3.1')) {
          //console.log("/curso1.2/*");
          this.bannerImage = "/assets/Banners/MAGNA-banner3.1.png";

        } else if (event.urlAfterRedirects.startsWith('/curso3.2')) {
          //console.log("/curso1.2/*");
          this.bannerImage = "/assets/Banners/MAGNA-banner3.2.png";

        } else if (event.urlAfterRedirects.startsWith('/curso4.1')) {
          //console.log("/curso1.2/*");
          this.bannerImage = "/assets/Banners/MAGNA-banner4.1.png";

        } else if (event.urlAfterRedirects.startsWith('/curso4.2')) {
          //console.log("/curso1.2/*");
          this.bannerImage = "/assets/Banners/MAGNA-banner4.2.png";
        } else if (event.urlAfterRedirects.startsWith('/curso5')) {
          //console.log("/curso1.2/*");
          this.bannerImage = "/assets/Banners/MAGNA-5.1.png";

        } else if (event.urlAfterRedirects.startsWith('/curso6')) {
          //console.log("/curso1.2/*");
          this.bannerImage = "/assets/Banners/MAGNA-6.1.png";



        } else {
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
