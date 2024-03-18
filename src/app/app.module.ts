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
import { C12p3Component } from './component/curso1.2/c12p3/c12p3.component';
import { C12p0Component } from './component/curso1.2/c12p0/c12p0.component';
import { Curso2Component } from './component/curso2/curso2.component';
import { C02p1Component } from './component/curso2/c02p1/c02p1.component';
import { C02p2Component } from './component/curso2/c02p2/c02p2.component';
import { C02p3Component } from './component/curso2/c02p3/c02p3.component';
import { C02p4Component } from './component/curso2/c02p4/c02p4.component';
import { C02p5cComponent } from './component/curso2/c02p5c/c02p5c.component';
import { C13p0Component } from './component/curso1.3/c13p0/c13p0.component';
import { C13p4Component } from './component/curso1.3/c13p4/c13p4.component';
import { C14p0Component } from './component/curso14/c14p0/c14p0.component';
import { C14p5Component } from './component/curso14/c14p5/c14p5.component';
import { C1p3Component } from './component/cursotest1/c1p3/c1p3.component';
import { C1p4Component } from './component/cursotest1/c1p4/c1p4.component';
import { C1p5Component } from './component/cursotest1/c1p5/c1p5.component';
import { C1p6Component } from './component/cursotest1/c1p6/c1p6.component';
import { C1p7Component } from './component/cursotest1/c1p7/c1p7.component';
import { C1p8Component } from './component/cursotest1/c1p8/c1p8.component';
import { C1p9Component } from './component/cursotest1/c1p9/c1p9.component';
import { C12p1Component } from './component/curso1.2/c12p1/c12p1.component';
import { C12p2Component } from './component/curso1.2/c12p2/c12p2.component';
import { C12p33Component } from './component/curso1.2/c12p33/c12p33.component';
import { C12p4Component } from './component/curso1.2/c12p4/c12p4.component';
import { C13pp1Component } from './component/curso1.3/c13pp1/c13pp1.component';
import { C13pp02Component } from './component/curso1.3/c13pp02/c13pp02.component';
import { C13pp03Component } from './component/curso1.3/c13pp03/c13pp03.component';
import { C13pp04Component } from './component/curso1.3/c13pp04/c13pp04.component';
import { C13pp05Component } from './component/curso1.3/c13pp05/c13pp05.component';
import { C13pp06Component } from './component/curso1.3/c13pp06/c13pp06.component';
import { C13pp07Component } from './component/curso1.3/c13pp07/c13pp07.component';
import { C13pp08Component } from './component/curso1.3/c13pp08/c13pp08.component';
import { C13pp09Component } from './component/curso1.3/c13pp09/c13pp09.component';
import { C13pp10Component } from './component/curso1.3/c13pp10/c13pp10.component';
import { C13pp11Component } from './component/curso1.3/c13pp11/c13pp11.component';
import { AdminmenuComponent } from './component/Admin/adminmenu/adminmenu.component';
import { ListaestudiantesComponent } from './component/Admin/listaestudiantes/listaestudiantes.component';
import { VerestudianteComponent } from './component/Admin/verestudiante/verestudiante.component';
import { AddadminComponent } from './component/Admin/addadmin/addadmin.component';
import { FilterpipePipe } from './service/filterpipe.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { C14pp1Component } from './component/curso14/c14pp1/c14pp1.component';
import { C14pp2Component } from './component/curso14/c14pp2/c14pp2.component';
import { C14pp3Component } from './component/curso14/c14pp3/c14pp3.component';
import { C14pp4Component } from './component/curso14/c14pp4/c14pp4.component';
import { C14pp5Component } from './component/curso14/c14pp5/c14pp5.component';
import { C14pp6Component } from './component/curso14/c14pp6/c14pp6.component';
import { C14pp7Component } from './component/curso14/c14pp7/c14pp7.component';
import { C14pp8Component } from './component/curso14/c14pp8/c14pp8.component';
import { C14pp9Component } from './component/curso14/c14pp9/c14pp9.component';
import { C14ppaComponent } from './component/curso14/c14ppa/c14ppa.component';
import { C12p2preComponent } from './component/curso1.2/c12p2pre/c12p2pre.component';
import { C14pp22p2Component } from './component/curso14/c14pp22p2/c14pp22p2.component';
import { C14pp22p3Component } from './component/curso14/c14pp22p3/c14pp22p3.component';
import { C02p01Component } from './component/curso2/c02p01/c02p01.component';
import { C02p02Component } from './component/curso2/c02p02/c02p02.component';
import { C02p03Component } from './component/curso2/c02p03/c02p03.component';
import { C02p04Component } from './component/curso2/c02p04/c02p04.component';
import { C02p05Component } from './component/curso2/c02p05/c02p05.component';
import { C02p06Component } from './component/curso2/c02p06/c02p06.component';
import { C02p07Component } from './component/curso2/c02p07/c02p07.component';
import { C02p08Component } from './component/curso2/c02p08/c02p08.component';
import { C02p09Component } from './component/curso2/c02p09/c02p09.component';
import { C02p10Component } from './component/curso2/c02p10/c02p10.component';
import { C02p11Component } from './component/curso2/c02p11/c02p11.component';
import { C02p12Component } from './component/curso2/c02p12/c02p12.component';
import { Curso3Component } from './component/curso3/curso3.component';
import { C03titleComponent } from './component/curso3/c03title/c03title.component';
import { C03vidComponent } from './component/curso3/c03vid/c03vid.component';
import { C03descaComponent } from './component/curso3/c03desca/c03desca.component';
import { C03endComponent } from './component/curso3/c03end/c03end.component';
import { C03p01Component } from './component/curso3/c03p01/c03p01.component';
import { C03p02Component } from './component/curso3/c03p02/c03p02.component';
import { C03p03Component } from './component/curso3/c03p03/c03p03.component';
import { C03p04Component } from './component/curso3/c03p04/c03p04.component';
import { C03p05Component } from './component/curso3/c03p05/c03p05.component';
import { C03p06Component } from './component/curso3/c03p06/c03p06.component';
import { C03p07Component } from './component/curso3/c03p07/c03p07.component';
import { C03p08Component } from './component/curso3/c03p08/c03p08.component';
import { C03p09Component } from './component/curso3/c03p09/c03p09.component';
import { C03p10Component } from './component/curso3/c03p10/c03p10.component';
import { C02p6endComponent } from './component/curso2/c02p6end/c02p6end.component';
import { VergrafComponent } from './component/Admin/vergraf/vergraf.component';
//import { Chart } from 'chart.js';


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
              c2p2,c2p1, Curso13Component, C13p1Component, C13p2Component, C13p3Component, Curso14Component, C14p1Component, C14p2Component, C14p3Component, C14p4cComponent, LoginComponent, C12p3Component, C12p0Component, Curso2Component, C02p1Component, C02p2Component, C02p3Component, C02p4Component, C02p5cComponent, C13p0Component, C13p4Component, C14p0Component, C14p5Component, C1p3Component, C1p4Component, C1p5Component, C1p6Component, C1p7Component, C1p8Component, C1p9Component, C12p1Component, C12p2Component, C12p33Component, C12p4Component, C13pp1Component, C13pp02Component, C13pp03Component, C13pp04Component, C13pp05Component, C13pp06Component, C13pp07Component, C13pp08Component, C13pp09Component, C13pp10Component, C13pp11Component, AdminmenuComponent, ListaestudiantesComponent, VerestudianteComponent, AddadminComponent, FilterpipePipe, C14pp1Component, C14pp2Component, C14pp3Component, C14pp4Component, C14pp5Component, C14pp6Component, C14pp7Component, C14pp8Component, C14pp9Component, C14ppaComponent, C12p2preComponent, C14pp22p2Component, C14pp22p3Component, C02p01Component, C02p02Component, C02p03Component, C02p04Component, C02p05Component, C02p06Component, C02p07Component, C02p08Component, C02p09Component, C02p10Component, C02p11Component, C02p12Component, Curso3Component, C03titleComponent, C03vidComponent, C03descaComponent, C03endComponent, C03p01Component, C03p02Component, C03p03Component, C03p04Component, C03p05Component, C03p06Component, C03p07Component, C03p08Component, C03p09Component, C03p10Component, C02p6endComponent, VergrafComponent, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    //ChartsModule,
    
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
