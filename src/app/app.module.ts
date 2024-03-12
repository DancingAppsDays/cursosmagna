import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';         //manual definition


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
//import {SingleMediaPlayer} from './single-media-player';
*/

import { Epp1Component } from './component/epp1/epp1.component';
import { Epp2Component } from './component/epp2/epp2.component';
import { SelectcourseComponent } from './component/selectcourse/selectcourse.component';
import { Curso1Component } from './curso1/curso1.component';
//import { Page1Component } from './curso1/page1/page1.component';
//import { Page2Component } from './curso1/page2/page2.component';
import { Page3Component } from './component/cursotest1/page3/page3.component';
import { Page4Component } from './component/cursotest1/page4/page4.component';
import { Page5Component } from './component/cursotest1/page5/page5.component';

import { Cursotest1Component } from './component/cursotest1/cursotest1.component';

import { Page1Component, Page1Component  as p1} from './component/cursotest1/page1/page1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Page5cuestComponent } from './component/cursotest1/page5cuest/page5cuest.component';
import { AddtesterComponent } from './component/Admin/addtester/addtester.component';
import { TestingmagnaComponent } from './testingmagna/testingmagna.component';
import { NgbModule, } from '@ng-bootstrap/ng-bootstrap';
import { ToastProgressComponent } from './component/toast-progress/toast-progress.component';
import { MenumodulosComponent } from './component/menumodulos/menumodulos.component';
import { IntroComponent } from './component/intro/intro.component';
import { Intro12Component } from './component/intro/intro12/intro12.component';
import { Intro13Component } from './component/intro/intro13/intro13.component';
import { Curso12Component } from './component/curso1.2/curso1.2.component';
import { CookieService } from 'ngx-cookie-service';
import { Page1Component  as  c2p1} from './component/curso1.2/page1/page1.component';
import { Page2Component as  c2p2} from './component/curso1.2/page2/page2.component';
import { Page2Component } from './component/cursotest1/page2/page2.component';
import { Curso13Component } from './component/curso13/curso13.component';
import { C13p1Component } from './component/curso13/c13p1/c13p1.component';
import { C13p2Component } from './component/curso13/c13p2/c13p2.component';
import { C13p3Component } from './component/curso13/c13p3/c13p3.component';
import { Curso14Component } from './component/curso14/curso14.component';
import { C14p1Component } from './component/curso14/c14p1/c14p1.component';
import { C14p2Component } from './component/curso14/c14p2/c14p2.component';
import { C14p3Component } from './component/curso14/c14p3/c14p3.component';
import { C14p4cComponent } from './component/curso14/c14p4c/c14p4c.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';





@NgModule({
  declarations: [
   AppComponent,
    Epp1Component,
    Epp2Component,
    SelectcourseComponent,
    Curso1Component,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
   

    p1,
   
    Page5cuestComponent,
    AddtesterComponent,
    TestingmagnaComponent,
    ToastProgressComponent,
    MenumodulosComponent,
    IntroComponent,
    Intro12Component,
    Intro13Component,
    
    
    Cursotest1Component,
              Page5Component,
              Curso12Component,
              c2p2,c2p1, Curso13Component, C13p1Component, C13p2Component, C13p3Component, Curso14Component, C14p1Component, C14p2Component, C14p3Component, C14p4cComponent, LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    NgbModule,// NgbToast, NgTemplateOutlet,NgbTooltipModule,

   // VgCoreModule,
    //VgControlsModule,
   // VgOverlayPlayModule,
   // VgBufferingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
