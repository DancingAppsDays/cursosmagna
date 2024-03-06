import { Component, TemplateRef, inject } from '@angular/core';
import { ChildrenOutletContexts, RouterLink, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { routeTransitionAnimations } from './route-transition-animations';
import { ToastServiceService } from './service/toast-service.service';

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

  successTpl={Header:"Progreso del curso",Body:"Adelante Con la siguiente sección" };


  toastService = inject(ToastServiceService);
  //constructor (private contexts: ChildrenOutletContexts){}

   // getRouteAnimationData() {
   //   return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  // }

    prepareRoute(outlet: RouterOutlet) {
      return outlet && 
        outlet.activatedRouteData && 
        outlet.activatedRouteData['animationState'];
     }
    
  
     toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
    }


    showSuccess({Header,Body}:any){//]   template: TemplateRef<any>) {
      this.toastService.show(Header,Body);
      console.log(Header + " " + Body)
      //   { template, classname: 'bg-success text-light', delay: 10000 });
    }
  

    ngOnDestroy(): void {
      this.toastService.clear();
    }

}
