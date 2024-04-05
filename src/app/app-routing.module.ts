import { NgModule } from '@angular/core';

import { Epp1Component } from './component/epp1/epp1.component';
import { Epp2Component } from './component/epp2/epp2.component';
import { Curso1Component } from './curso1/curso1.component';
//import { Page1Component } from './curso1/page1/page1.component';
//import { Page2Component } from './curso1/page2/page2.component';
import { Cursotest1Component } from './component/cursotest1/cursotest1.component';

import { Page1Component as p1 } from './component/cursotest1/page1/page1.component';
import { Page2Component as p2 } from './component/cursotest1/page2/page2.component';
import { Page3Component as p3 } from './component/cursotest1/page3/page3.component';
import { Page4Component as p4 } from './component/cursotest1/page4/page4.component';
import { Page5Component as p5 } from './component/cursotest1/page5/page5.component';
import { RouterModule, Routes } from '@angular/router';
import { TestingmagnaComponent } from './testingmagna/testingmagna.component';
import { MenumodulosComponent } from './component/menumodulos/menumodulos.component';
import { IntroComponent } from './component/intro/intro.component';

import { Intro11Component as ii1 } from './component/intro/intro11/intro11.component';
import { Intro12Component as ii2 } from './component/intro/intro12/intro12.component';
import { Intro13Component as ii3 } from './component/intro/intro13/intro13.component';

import { Curso12Component } from './component/curso1.2/curso1.2.component';
import { Page1Component } from './component/curso1.2/page1/page1.component';
import { Page2Component } from './component/curso1.2/page2/page2.component';
import { Curso13Component } from './component/curso13/curso13.component';
import { C13p1Component } from './component/curso13/c13p1/c13p1.component';
import { C13p2Component } from './component/curso13/c13p2/c13p2.component';
import { C13p3Component } from './component/curso13/c13p3/c13p3.component';
import { Curso14Component } from './component/curso14/curso14.component';
import { C14p1Component } from './component/curso14/c14p1/c14p1.component';
import { C14p2Component } from './component/curso14/c14p2/c14p2.component';
import { C14p3Component } from './component/curso14/c14p3/c14p3.component';
import { C14p4cComponent } from './component/curso14/c14p4c/c14p4c.component';
import { AddtesterComponent } from './component/Admin/addtester/addtester.component';
import { C12p3Component } from './component/curso1.2/c12p3/c12p3.component';
import { C12p0Component } from './component/curso1.2/c12p0/c12p0.component';
import { LoginComponent } from './component/login/login.component';
import { C13p4Component } from './component/curso1.3/c13p4/c13p4.component';
import { C13p0Component } from './component/curso1.3/c13p0/c13p0.component';
import { C14p5Component } from './component/curso14/c14p5/c14p5.component';
import { C14p0Component } from './component/curso14/c14p0/c14p0.component';
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
import { AddadminComponent } from './component/Admin/addadmin/addadmin.component';
import { VerestudianteComponent } from './component/Admin/verestudiante/verestudiante.component';
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
import { ListaestudiantesComponent } from './component/Admin/listaestudiantes/listaestudiantes.component';
import { C12p2preComponent } from './component/curso1.2/c12p2pre/c12p2pre.component';
import { C14pp22p2Component } from './component/curso14/c14pp22p2/c14pp22p2.component';
import { C14pp22p3Component } from './component/curso14/c14pp22p3/c14pp22p3.component';
import { Curso2Component } from './component/curso2/curso2.component';
import { C02p1Component } from './component/curso2/c02p1/c02p1.component';
import { C02p3Component } from './component/curso2/c02p3/c02p3.component';
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
import { C02p4Component } from './component/curso2/c02p4/c02p4.component';
import { C02p5cComponent } from './component/curso2/c02p5c/c02p5c.component';
import { C02p6endComponent } from './component/curso2/c02p6end/c02p6end.component';
import { VergrafComponent } from './component/Admin/vergraf/vergraf.component';
import { RegisterComponent } from './register/register.component';
import { Curso3Component } from './component/curso3/curso3.component';
import { C03titleComponent } from './component/curso3/c03title/c03title.component';
import { C03p01Component } from './component/curso3/c03p01/c03p01.component';
import { C03p02Component } from './component/curso3/c03p02/c03p02.component';
import { C03p03Component } from './component/curso3/c03p03/c03p03.component';
import { C03p04Component } from './component/curso3/c03p04/c03p04.component';
import { C03descaComponent } from './component/curso3/c03desca/c03desca.component';
import { C03endComponent } from './component/curso3/c03end/c03end.component';
import { Curso03Component } from './component/curso03/curso03.component';
import { C032titleComponent } from './component/curso03/c03.2title/c03.2title.component';
import { C032vidComponent } from './component/curso03/c03.2vid/c03.2vid.component';
import { C03p05Component } from './component/curso3/c03p05/c03p05.component';
import { C03p06Component } from './component/curso3/c03p06/c03p06.component';
import { C03p07Component } from './component/curso3/c03p07/c03p07.component';
import { C03p08Component } from './component/curso3/c03p08/c03p08.component';
import { C03p09Component } from './component/curso3/c03p09/c03p09.component';
import { C03p10Component } from './component/curso3/c03p10/c03p10.component';

import { C032endComponent } from './component/curso03/c03.2end/c03.2end.component';
import { Curso4Component } from './component/curso4/curso4.component';
import { C04introComponent } from './component/curso4/c04intro/c04intro.component';
import { C04videoComponent } from './component/curso4/c04video/c04video.component';
import { C04p01Component } from './component/curso4/c04p01/c04p01.component';
import { C04p02Component } from './component/curso4/c04p02/c04p02.component';
import { C04p03Component } from './component/curso4/c04p03/c04p03.component';
import { C04p04Component } from './component/curso4/c04p04/c04p04.component';
import { C04descarComponent } from './component/curso4/c04descar/c04descar.component';
import { C04endComponent } from './component/curso4/c04end/c04end.component';
import { Curso42Component } from './component/curso4.2/curso4.2.component';
import { C042introComponent } from './component/curso4.2/c042intro/c042intro.component';
import { C042vidComponent } from './component/curso4.2/c042vid/c042vid.component';
import { C042p01Component } from './component/curso4.2/c042p01/c042p01.component';
import { C042p02Component } from './component/curso4.2/c042p02/c042p02.component';
import { C042p03Component } from './component/curso4.2/c042p03/c042p03.component';
import { C042CComponent } from './component/curso4.2/c042-c/c042-c.component';
import { C042endComponent } from './component/curso4.2/c042end/c042end.component';
import { C03cuestComponent } from './component/curso03/c03cuest/c03cuest.component';
import { C13pp12Component } from './component/curso1.3/c13pp12/c13pp12.component';
import { C13pp13Component } from './component/curso1.3/c13pp13/c13pp13.component';
import { C13pp14Component } from './component/curso1.3/c13pp14/c13pp14.component';
import { C03vidComponent } from './component/curso3/c03vid/c03vid.component';
import { Curso5Component } from './component/curso5/curso5.component';
import { Curso5introComponent } from './component/curso5/curso5intro/curso5intro.component';
import { Curso5videoComponent } from './component/curso5/curso5video/curso5video.component';
import { Curso5pp1Component } from './component/curso5/curso5pp1/curso5pp1.component';
import { Curso5pp2Component } from './component/curso5/curso5pp2/curso5pp2.component';
import { Curso5endComponent } from './component/curso5/curso5end/curso5end.component';
import { Curso6Component } from './component/curso6/curso6.component';
import { Curso6introComponent } from './component/curso6/curso6intro/curso6intro.component';
import { Curso6videoComponent } from './component/curso6/curso6video/curso6video.component';
import { Curso6pp1Component } from './component/curso6/curso6pp1/curso6pp1.component';
import { Curso6pp2Component } from './component/curso6/curso6pp2/curso6pp2.component';
import { Curso6endComponent } from './component/curso6/curso6end/curso6end.component';
import { Curso6cComponent } from './component/curso6/curso6c/curso6c.component';
import { Curso5cComponent } from './component/curso5/curso5c/curso5c.component';
import { RecoverpassComponent } from './recoverpass/recoverpass.component';
import { ResetpassComponent } from './resetpass/resetpass.component';


const routes: Routes = [

  // {path:'epp1',component:Epp1Component , data: { animationState: 'One' }},
  //{path:'epp2',component:Epp2Component , data: { animationState: 'Two' }},

  { path: 'login1', component: LoginComponent },
  { path: 'registrarse', component: RegisterComponent },

  { path: 'menumodulo', component: MenumodulosComponent },
  { path: 'adminmenu', component: AdminmenuComponent },
  { path: 'adduser', component: AddtesterComponent },
  { path: 'addadmin', component: AddadminComponent },
  { path: 'listusers', component: ListaestudiantesComponent },
  // {path:'vertesters',component:VerestudianteComponent},
  { path: 'verquiz', component: VerestudianteComponent },
  //{path:'test',component:TestingmagnaComponent},
  { path: 'vergraf', component: VergrafComponent, },
  { path: 'recoverpass', component: RecoverpassComponent },
  // { path: 'resetpass', component: ResetpassComponent },
  {
    path: 'resetpass/:token',
    component: ResetpassComponent
  },



  {
    path: 'intro', component: IntroComponent,
    children: [
      {
        path: 'one',
        component: ii1,
        data: { animationState: '1' }
      },
      {
        path: 'two',
        component: ii2,
        data: { animationState: '2' }
      },
      {
        path: 'three',
        component: ii3,
        data: { animationState: '3' }
      },


    ]
  },




  {
    path: 'cursotest', component: Cursotest1Component,
    children: [
      {
        path: 'one',
        component: p1,
        data: { animationState: '1' }
      },
      {
        path: 'two',
        component: p2,
        data: { animationState: '2' }
      },
      {
        path: 'three',
        component: C1p3Component,
        data: { animationState: '3' }
      },
      {
        path: 'four',
        component: C1p4Component,
        data: { animationState: '4' }
      },
      {
        path: 'five',
        component: C1p5Component,
        data: { animationState: '5' }
      },
      {
        path: 'six',
        component: C1p6Component,
        data: { animationState: '6' }
      },
      {
        path: 'seven',
        component: C1p7Component,
        data: { animationState: '7' }
      },
      {
        path: 'eight',
        component: C1p8Component,
        data: { animationState: '8' }
      },
      {
        path: 'nine',
        component: C1p9Component,
        data: { animationState: '9' }
      },
      {
        path: 'ten',
        component: p4,
        data: { animationState: '10' }
      },
      {
        path: 'eleven',
        component: p5,
        data: { animationState: '1' }
      },
      //{path: '**', redirectTo:''}

    ]
  },
  {
    path: 'curso1.2', component: Curso12Component,
    children: [
      {
        path: 'one',
        component: C12p0Component,
        data: { animationState: '1' }
      },

      {
        path: 'two',
        component: Page1Component,
        data: { animationState: '2' }
      },
      {
        path: 'three',
        component: C12p2preComponent,
        data: { animationState: '3' }
      },
      {
        path: 'four',
        component: C12p1Component,
        data: { animationState: '4' }
      },
      {
        path: 'five',
        component: C12p2Component,
        data: { animationState: '5' }
      },
      {
        path: 'six',
        component: C12p33Component,
        data: { animationState: '6' }
      },
      {
        path: 'seven',
        component: C12p4Component,
        data: { animationState: '7' }
      },
      {
        path: 'eight',
        component: C12p3Component,
        data: { animationState: '8' }
      },
      //{path: '**', redirectTo:''}

    ]
  },

  {
    path: 'curso1.3', component: Curso13Component,
    children: [
      {
        path: 'one',
        component: C13p0Component,
        data: { animationState: '1' }
      },
      {
        path: 'two',
        component: C13p1Component,
        data: { animationState: '2' }
      },
      {
        path: 'three',
        component: C13pp1Component,
        data: { animationState: '3' }
      },
      {
        path: 'four',
        component: C13pp02Component,
        data: { animationState: '4' }
      },
      {
        path: 'five',
        component: C13pp03Component,
        data: { animationState: '5' }
      },
      {
        path: 'six',
        component: C13pp04Component,
        data: { animationState: '6' }
      },
      {
        path: 'seven',
        component: C13pp05Component,
        data: { animationState: '7' }
      },
      {
        path: 'eight',
        component: C13pp06Component,
        data: { animationState: '8' }
      },
      {
        path: 'nine',
        component: C13pp07Component,
        data: { animationState: '9' }
      },
      {
        path: 'ten',
        component: C13pp08Component,
        data: { animationState: '10' }
      },
      {
        path: 'eleven',
        component: C13pp10Component,
        data: { animationState: '1' }
      },
      {
        path: 'twelve',
        component: C13pp11Component,
        data: { animationState: '2' }
      },
      {
        path: 'thirteen',
        component: C13pp12Component,
        data: { animationState: '4' }
      },
      {
        path: 'fourteen',
        component: C13pp13Component,
        data: { animationState: '5' }
      },
      {
        path: 'fifteen',
        component: C13pp14Component,
        data: { animationState: '6' }
      },
      {
        path: 'sixteen',
        component: C13p3Component,
        data: { animationState: '7' }
      },
      {
        path: 'seventeen',
        component: C13p4Component,
        data: { animationState: '8' }
      },

      //{path: '**', redirectTo:''}

    ]
  },


  {
    path: 'curso1.4', component: Curso14Component,
    children: [
      {
        path: 'one',
        component: C14p0Component,
        data: { animationState: '1' }
      },
      {
        path: 'two',
        component: C14p1Component,
        data: { animationState: '2' }
      },
      {
        path: 'three',
        component: C14pp1Component,
        data: { animationState: '3' }
      },
      {
        path: 'four',
        component: C14pp2Component,
        data: { animationState: '4' }
      },
      {
        path: 'five',
        component: C14pp22p2Component,
        data: { animationState: '5' }
      },
      {
        path: 'six',
        component: C14pp22p3Component,
        data: { animationState: '6' }
      },

      {
        path: 'seven',
        component: C14pp3Component,
        data: { animationState: '7' }
      },
      {
        path: 'eight',
        component: C14pp4Component,
        data: { animationState: '8' }
      },
      {
        path: 'nine',
        component: C14pp5Component,
        data: { animationState: '9' }
      },
      {
        path: 'ten',
        component: C14pp6Component,
        data: { animationState: '10' }
      },
      {
        path: 'eleven',
        component: C14pp7Component,
        data: { animationState: '1' }
      },
      {
        path: 'twelve',
        component: C14pp8Component,
        data: { animationState: '2' }
      },
      {
        path: 'thirteen',
        component: C14pp9Component,
        data: { animationState: '3' }
      },
      {
        path: 'fourteen',
        component: C14ppaComponent,
        data: { animationState: '4' }
      },
      {
        path: 'fifteen',
        component: C14p3Component,
        data: { animationState: '5' }
      },
      {
        path: 'sixteen',
        component: C14p4cComponent,
        data: { animationState: '6' }
      },
      {
        path: 'seventeen',
        component: C14p5Component,
        data: { animationState: '7' }
      },

    ]
  },


  {
    path: 'curso2', component: Curso2Component,
    children: [
      {
        path: 'one',
        component: C02p1Component,
        data: { animationState: '1' }
      },
      {
        path: 'two',
        component: C02p3Component,
        data: { animationState: '2' }
      },
      {
        path: 'three',
        component: C02p01Component,
        data: { animationState: '3' }
      },
      {
        path: 'four',
        component: C02p02Component,
        data: { animationState: '4' }
      },
      {
        path: 'five',
        component: C02p03Component,
        data: { animationState: '5' }
      },
      {
        path: 'six',
        component: C02p04Component,
        data: { animationState: '6' }
      },

      {
        path: 'seven',
        component: C02p06Component,
        data: { animationState: '7' }
      },
      {
        path: 'eight',
        component: C02p07Component,
        data: { animationState: '8' }
      },
      {
        path: 'nine',
        component: C02p08Component,
        data: { animationState: '9' }
      },
      {
        path: 'ten',
        component: C02p09Component,
        data: { animationState: '10' }
      },
      {
        path: 'eleven',
        component: C02p10Component,
        data: { animationState: '1' }
      },
      {
        path: 'twelve',
        component: C02p11Component,
        data: { animationState: '2' }
      },
      {
        path: 'thirteen',
        component: C02p12Component,
        data: { animationState: '3' }
      },
      {
        path: 'fourteen',
        component: C02p4Component,
        data: { animationState: '4' }
      },
      {
        path: 'fifteen',
        component: C02p5cComponent,
        data: { animationState: '5' }
      },
      {
        path: 'sixteen',
        component: C02p6endComponent,
        data: { animationState: '6' }
      },
      {
        path: 'seventeen',
        component: C02p6endComponent,
        data: { animationState: '7' }
      },

    ]
  },


  {
    path: 'curso3.1', component: Curso3Component,
    children: [
      {
        path: 'one',
        component: C03titleComponent,
        data: { animationState: '1' }
      },
      {
        path: 'two',
        component: C03vidComponent,
        data: { animationState: '2' }
      },
      {
        path: 'three',
        component: C03p01Component,
        data: { animationState: '3' }
      },
      {
        path: 'four',
        component: C03p02Component,
        data: { animationState: '4' }
      },
      {
        path: 'five',
        component: C03p03Component,
        data: { animationState: '5' }
      },
      {
        path: 'six',
        component: C03p04Component,
        data: { animationState: '6' }
      },

      {
        path: 'seven',
        component: C03descaComponent,
        data: { animationState: '7' }
      },
      {
        path: 'eight',
        component: C03endComponent,
        data: { animationState: '8' }
      },


      {
        path: 'nine',
        component: C02p07Component,
        data: { animationState: '9' }
      },
      {
        path: 'ten',
        component: C02p08Component,
        data: { animationState: '10' }
      },
      {
        path: 'eleven',
        component: C02p09Component,
        data: { animationState: '1' }
      },
      {
        path: 'twelve',
        component: C02p10Component,
        data: { animationState: '2' }
      },
      {
        path: 'thirteen',
        component: C02p11Component,
        data: { animationState: '3' }
      },
      {
        path: 'fourteen',
        component: C02p12Component,
        data: { animationState: '4' }
      },
      {
        path: 'fifteen',
        component: C02p4Component,
        data: { animationState: '5' }
      },
      {
        path: 'sixteen',
        component: C02p5cComponent,
        data: { animationState: '6' }
      },
      {
        path: 'seventeen',
        component: C02p6endComponent,
        data: { animationState: '7' }
      },

    ]
  },




  {
    path: 'curso3.2', component: Curso03Component,
    children: [
      {
        path: 'one',
        component: C032titleComponent,
        data: { animationState: '1' }
      },
      {
        path: 'two',
        component: C032vidComponent,
        data: { animationState: '2' }
      },
      {
        path: 'three',
        component: C03p05Component,
        data: { animationState: '3' }
      },
      {
        path: 'four',
        component: C03p06Component,
        data: { animationState: '4' }
      },
      {
        path: 'five',
        component: C03p07Component,
        data: { animationState: '5' }
      },
      {
        path: 'six',
        component: C03p08Component,
        data: { animationState: '6' }
      },

      {
        path: 'seven',
        component: C03p09Component,
        data: { animationState: '7' }
      },
      {
        path: 'eight',
        component: C03p10Component,
        data: { animationState: '8' }
      },


      {
        path: 'nine',
        component: C03cuestComponent,
        data: { animationState: '9' }
      },
      {
        path: 'ten',
        component: C032endComponent,
        data: { animationState: '10' }
      },

    ]
  },


  {
    path: 'curso4.1', component: Curso4Component,
    children: [
      {
        path: 'one',
        component: C04introComponent,
        data: { animationState: '1' }
      },
      {
        path: 'two',
        component: C04videoComponent,
        data: { animationState: '2' }
      },
      {
        path: 'three',
        component: C04p01Component,
        data: { animationState: '3' }
      },
      {
        path: 'four',
        component: C04p02Component,
        data: { animationState: '4' }
      },
      {
        path: 'five',
        component: C04p03Component,
        data: { animationState: '5' }
      },
      {
        path: 'six',
        component: C04p04Component,
        data: { animationState: '6' }
      },

      {
        path: 'seven',
        component: C04descarComponent,
        data: { animationState: '7' }
      },
      {
        path: 'eight',
        component: C04endComponent,
        data: { animationState: '8' }
      },


    ]
  },
  //path2

  {
    path: 'curso4.2', component: Curso42Component,
    children: [
      {
        path: 'one',
        component: C042introComponent,
        data: { animationState: '1' }
      },
      {
        path: 'two',
        component: C042vidComponent,
        data: { animationState: '2' }
      },
      {
        path: 'three',
        component: C042p01Component,
        data: { animationState: '3' }
      },
      {
        path: 'four',
        component: C042p02Component,
        data: { animationState: '4' }
      },
      {
        path: 'five',
        component: C042p03Component,
        data: { animationState: '5' }
      },
      {
        path: 'six',
        component: C042CComponent,
        data: { animationState: '6' }
      },

      {
        path: 'seven',
        component: C042endComponent,
        data: { animationState: '7' }
      }



    ]
  },


  {
    path: 'curso5', component: Curso5Component,
    children: [
      {
        path: 'one',
        component: Curso5introComponent,
        data: { animationState: '1' }
      },
      {
        path: 'two',
        component: Curso5videoComponent,
        data: { animationState: '2' }
      },
      {
        path: 'three',
        component: Curso5pp1Component,
        data: { animationState: '3' }
      },
      {
        path: 'four',
        component: Curso5pp2Component,
        data: { animationState: '4' }
      },
      {
        path: 'five',
        component: Curso5cComponent,
        data: { animationState: '5' }
      },
      {
        path: 'six',
        component: Curso5endComponent,
        data: { animationState: '6' }
      },
    ]
  },

  {
    path: 'curso6', component: Curso6Component,
    children: [
      {
        path: 'one',
        component: Curso6introComponent,
        data: { animationState: '1' }
      },
      {
        path: 'two',
        component: Curso6videoComponent,
        data: { animationState: '2' }
      },
      {
        path: 'three',
        component: Curso6pp1Component,
        data: { animationState: '3' }
      },
      {
        path: 'four',
        component: Curso6pp2Component,
        data: { animationState: '4' }
      },
      {
        path: 'five',
        component: Curso6cComponent,
        data: { animationState: '5' }
      },
      {
        path: 'six',
        component: Curso6endComponent,
        data: { animationState: '6' }
      },
    ]
  },



  /* {
   path: '',
   children: [
     {
       path: 'one',
       component: Epp1Component,
       data: { animationState: 'One' }
     },
     {
       path: 'two',
       component: Epp2Component,
       data: { animationState: 'Two' }
     },
     
     {
       path: '**',
       redirectTo: 'one'
     }
   ]
 },
 {
   path: '**',
   redirectTo: 'one'
 },*/
  {
    path: 'curso1', component: Curso1Component,
    children: [
      {
        path: 'one',
        component: Page1Component,
        data: { animationState: 'One' }
      },
      {
        path: 'two',
        component: Page2Component,
        data: { animationState: 'Two' }
      },
      //{path: '**', redirectTo:''}

    ]
  },
  {
    path: 'two',
    component: Page2Component,
    data: { animationState: 'Two' }
  },

  // wildcard route for non-existing routes
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
