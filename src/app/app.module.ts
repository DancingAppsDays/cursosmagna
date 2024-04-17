import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';         //manual definition


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { NgChartsModule } from 'ng2-charts';
//import { ChartsModule } from 'ng2-charts';
import { BaseChartDirective, withDefaultRegisterables } from 'ng2-charts';
import { provideCharts, } from 'ng2-charts';

import { Chart } from 'chart.js';


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

import { Page1Component, Page1Component as p1 } from './component/cursotest1/page1/page1.component';
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
import { Page1Component as c2p1 } from './component/curso1.2/page1/page1.component';
import { Page2Component as c2p2 } from './component/curso1.2/page2/page2.component';
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
import { BarController, Colors, Legend } from 'chart.js';
import { RegisterComponent } from './register/register.component';
import { C03cuestComponent } from './component/curso03/c03cuest/c03cuest.component';
import { Curso03Component } from './component/curso03/curso03.component';

import { C032endComponent } from './component/curso03/c03.2end/c03.2end.component';
//import { C032cuesComponent } from './component/curso03/c03.2cues/c03.2cues.component';
import { C032titleComponent } from './component/curso03/c03.2title/c03.2title.component';
import { C032vidComponent } from './component/curso03/c03.2vid/c03.2vid.component';
import { Curso4Component } from './component/curso4/curso4.component';
import { Curso42Component } from './component/curso4.2/curso4.2.component';
import { C04introComponent } from './component/curso4/c04intro/c04intro.component';
import { C04videoComponent } from './component/curso4/c04video/c04video.component';
import { C04p01Component } from './component/curso4/c04p01/c04p01.component';
import { C04p02Component } from './component/curso4/c04p02/c04p02.component';
import { C04p03Component } from './component/curso4/c04p03/c04p03.component';
import { C04descarComponent } from './component/curso4/c04descar/c04descar.component';
import { C04endComponent } from './component/curso4/c04end/c04end.component';
import { C042introComponent } from './component/curso4.2/c042intro/c042intro.component';
import { C042vidComponent } from './component/curso4.2/c042vid/c042vid.component';
import { C042p01Component } from './component/curso4.2/c042p01/c042p01.component';
import { C042p02Component } from './component/curso4.2/c042p02/c042p02.component';
import { C042p03Component } from './component/curso4.2/c042p03/c042p03.component';

import { C04p04Component } from './component/curso4/c04p04/c04p04.component';
import { C042CComponent } from './component/curso4.2/c042-c/c042-c.component';
import { C042endComponent } from './component/curso4.2/c042end/c042end.component';
import { C13pp12Component } from './component/curso1.3/c13pp12/c13pp12.component';
import { C13pp13Component } from './component/curso1.3/c13pp13/c13pp13.component';
import { C13pp14Component } from './component/curso1.3/c13pp14/c13pp14.component';
import { C14pp10Component } from './component/curso14/c14pp10/c14pp10.component';
import { Curso5Component } from './component/curso5/curso5.component';
import { Curso5pp1Component } from './component/curso5/curso5pp1/curso5pp1.component';
import { Curso5pp2Component } from './component/curso5/curso5pp2/curso5pp2.component';
import { VideoComponent } from './component/curso5/video/video.component';
import { Curso5introComponent } from './component/curso5/curso5intro/curso5intro.component';
import { Curso5videoComponent } from './component/curso5/curso5video/curso5video.component';
import { Curso5endComponent } from './component/curso5/curso5end/curso5end.component';
import { Curso6Component } from './component/curso6/curso6.component';
import { Curso6pp1Component } from './component/curso6/curso6pp1/curso6pp1.component';
import { Curso6pp2Component } from './component/curso6/curso6pp2/curso6pp2.component';
import { Curso6introComponent } from './component/curso6/curso6intro/curso6intro.component';
import { Curso6videoComponent } from './component/curso6/curso6video/curso6video.component';
import { Curso6endComponent } from './component/curso6/curso6end/curso6end.component';
import { Curso5cComponent } from './component/curso5/curso5c/curso5c.component';
import { Curso6cComponent } from './component/curso6/curso6c/curso6c.component';

import { RecoverpassComponent } from './recoverpass/recoverpass.component';
import { ResetpassComponent } from './resetpass/resetpass.component';

import { C1pp01Component } from './component/cursotest1/c1pp01/c1pp01.component';
import { C1pp02Component } from './component/cursotest1/c1pp02/c1pp02.component';
import { C1pp03Component } from './component/cursotest1/c1pp03/c1pp03.component';
import { C1pp04Component } from './component/cursotest1/c1pp04/c1pp04.component';
import { C1pp05Component } from './component/cursotest1/c1pp05/c1pp05.component';
import { C14pp1preComponent } from './component/curso14/c14pp1pre/c14pp1pre.component';
import { C12f1Component } from './component/curso1.2/c12f1/c12f1.component';
import { C12f2Component } from './component/curso1.2/c12f2/c12f2.component';
import { C12f3Component } from './component/curso1.2/c12f3/c12f3.component';
import { C12f4Component } from './component/curso1.2/c12f4/c12f4.component';
import { C12f5Component } from './component/curso1.2/c12f5/c12f5.component';
import { C12f6Component } from './component/curso1.2/c12f6/c12f6.component';
import { C12f7Component } from './component/curso1.2/c12f7/c12f7.component';
import { C12f8Component } from './component/curso1.2/c12f8/c12f8.component';
import { C12f9Component } from './component/curso1.2/c12f9/c12f9.component';
import { C12f10Component } from './component/curso1.2/c12f10/c12f10.component';
import { C12f11Component } from './component/curso1.2/c12f11/c12f11.component';
import { C12f12Component } from './component/curso1.2/c12f12/c12f12.component';
import { C12f13Component } from './component/curso1.2/c12f13/c12f13.component';
import { C12f14Component } from './component/curso1.2/c12f14/c12f14.component';
import { C12f15Component } from './component/curso1.2/c12f15/c12f15.component';
import { C13f1Component } from './component/curso1.3/c13f1/c13f1.component';
import { C13f2Component } from './component/curso1.3/c13f2/c13f2.component';
import { C13f3Component } from './component/curso1.3/c13f3/c13f3.component';
import { C14f1Component } from './component/curso14/c14f1/c14f1.component';
import { C14f2Component } from './component/curso14/c14f2/c14f2.component';
import { C14f3Component } from './component/curso14/c14f3/c14f3.component';
import { C14f4Component } from './component/curso14/c14f4/c14f4.component';
import { C14f5Component } from './component/curso14/c14f5/c14f5.component';
import { C14f6Component } from './component/curso14/c14f6/c14f6.component';
import { C14f7Component } from './component/curso14/c14f7/c14f7.component';
import { C14f8Component } from './component/curso14/c14f8/c14f8.component';
import { C02f1Component } from './component/curso2/c02f1/c02f1.component';
import { C02f2Component } from './component/curso2/c02f2/c02f2.component';
import { C02f3Component } from './component/curso2/c02f3/c02f3.component';
import { C032f3Component } from './component/curso03/c032f3/c032f3.component';
import { C032f4Component } from './component/curso03/c032f4/c032f4.component';
import { C032f5Component } from './component/curso03/c032f5/c032f5.component';
import { C032f6Component } from './component/curso03/c032f6/c032f6.component';
import { C032f7Component } from './component/curso03/c032f7/c032f7.component';
import { C032f8Component } from './component/curso03/c032f8/c032f8.component';
import { C032f9Component } from './component/curso03/c032f9/c032f9.component';
import { C13f4Component } from './component/curso1.3/c13f4/c13f4.component';
import { C13f5Component } from './component/curso1.3/c13f5/c13f5.component';
import { Curso5f1Component } from './component/curso5/curso5f1/curso5f1.component';
import { Curso5f2Component } from './component/curso5/curso5f2/curso5f2.component';
import { Curso6pp001Component } from './component/curso6/curso6pp001/curso6pp001.component';
import { C12descComponent } from './component/curso1.2/c12desc/c12desc.component';
import { Curso6descComponent } from './component/curso6/curso6desc/curso6desc.component';
import { Curso5descComponent } from './component/curso5/curso5desc/curso5desc.component';
import { C03pf1Component } from './component/curso3/c03pf1/c03pf1.component';
import { C04p05Component } from './component/curso4/c04p05/c04p05.component';


//import { Chart } from 'chart.js';


@NgModule({
  declarations: [

    RecoverpassComponent, ResetpassComponent,
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
    c2p2, c2p1, Curso13Component, C13p1Component, C13p2Component, C13p3Component, Curso14Component, C14p1Component, C14p2Component, C14p3Component, C14p4cComponent, LoginComponent, C12p3Component, C12p0Component, Curso2Component, C02p1Component, C02p2Component, C02p3Component, C02p4Component, C02p5cComponent, C13p0Component, C13p4Component, C14p0Component, C14p5Component, C1p3Component, C1p4Component, C1p5Component, C1p6Component, C1p7Component, C1p8Component, C1p9Component, C12p1Component, C12p2Component, C12p33Component, C12p4Component, C13pp1Component, C13pp02Component, C13pp03Component, C13pp04Component, C13pp05Component, C13pp06Component, C13pp07Component, C13pp08Component, C13pp09Component, C13pp10Component, C13pp11Component, AdminmenuComponent, ListaestudiantesComponent, VerestudianteComponent, AddadminComponent, FilterpipePipe, C14pp1Component, C14pp2Component, C14pp3Component, C14pp4Component, C14pp5Component, C14pp6Component, C14pp7Component, C14pp8Component, C14pp9Component, C14ppaComponent, C12p2preComponent, C14pp22p2Component, C14pp22p3Component, C02p01Component, C02p02Component, C02p03Component, C02p04Component, C02p05Component, C02p06Component, C02p07Component, C02p08Component, C02p09Component, C02p10Component, C02p11Component, C02p12Component, Curso3Component, C03titleComponent, C03vidComponent, C03descaComponent, C03endComponent, C03p01Component, C03p02Component, C03p03Component, C03p04Component, C03p05Component, C03p06Component, C03p07Component, C03p08Component, C03p09Component, C03p10Component, C02p6endComponent,
    VergrafComponent, RegisterComponent, C03cuestComponent, Curso03Component, C032endComponent, C03cuestComponent, C032titleComponent, C032vidComponent,
    Curso4Component, Curso42Component, C04introComponent, C04videoComponent, C04p01Component, C04p02Component, C04p03Component, C04descarComponent, C04endComponent, C042introComponent, C042vidComponent, C042p01Component, C042p02Component, C042p03Component, C04p04Component, C042CComponent, C042endComponent, C13pp12Component, C13pp13Component, C13pp14Component, C14pp10Component, Curso5Component, Curso5pp1Component, Curso5pp2Component, VideoComponent, Curso5introComponent, Curso5videoComponent, Curso5endComponent, Curso6Component, Curso6pp1Component, Curso6pp2Component, Curso6introComponent, Curso6videoComponent, Curso6endComponent, Curso5cComponent, Curso6cComponent, C1pp01Component, C1pp02Component, C1pp03Component, C1pp04Component, C1pp05Component, C14pp1preComponent, C12f1Component, C12f2Component, C12f3Component, C12f4Component, C12f5Component, C12f6Component, C12f7Component, C12f8Component, C12f9Component, C12f10Component, C12f11Component, C12f12Component, C12f13Component, C12f14Component, C12f15Component, C13f1Component, C13f2Component, C13f3Component, C14f1Component, C14f2Component, C14f3Component, C14f4Component, C14f5Component, C14f6Component, C14f7Component, C14f8Component, C02f1Component, C02f2Component, C02f3Component, C032f3Component, C032f4Component, C032f5Component, C032f6Component, C032f7Component, C032f8Component, C032f9Component, C13f4Component, C13f5Component, Curso5f1Component, Curso5f2Component, Curso6pp001Component, C12descComponent, Curso6descComponent, Curso5descComponent, C03pf1Component, C04p05Component,
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


    // VergrafComponent, 

    // Chart,

    //NgChartsModule,
    BaseChartDirective,



    NgbModule,// NgbToast, NgTemplateOutlet,NgbTooltipModule,

    // VgCoreModule,
    //VgControlsModule,
    // VgOverlayPlayModule,
    // VgBufferingModule
  ],
  providers: [CookieService,
    provideCharts(withDefaultRegisterables())
    //minimal configuration/ DONT WORK!
    //provideCharts({ registerables: [BarController, Legend, Colors] })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
