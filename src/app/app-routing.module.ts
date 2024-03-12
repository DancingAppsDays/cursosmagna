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
import { Intro12Component as ii2} from './component/intro/intro12/intro12.component';
import { Intro13Component as ii3} from './component/intro/intro13/intro13.component';

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


const routes: Routes = [

 // {path:'epp1',component:Epp1Component , data: { animationState: 'One' }},
  //{path:'epp2',component:Epp2Component , data: { animationState: 'Two' }},
  

  {path:'adduser',component:AddtesterComponent},

  {path:'menumodulo',component:MenumodulosComponent},
  {path:'test',component:TestingmagnaComponent},


  {path:'intro', component:IntroComponent,
children: [
  { path: 'one',
  component: ii1,
  data: { animationState: 'One' }},
  {
    path: 'two',
    component: ii2,
    data: { animationState: 'Two' }
  },
  {
    path: 'three',
    component: ii3,
    data: { animationState: 'One' }
  },
  

]
},




  {path:'cursotest', component:Cursotest1Component,
  children: [
    { path: 'one',
    component: p1,
    data: { animationState: 'One' }},
    {
      path: 'two',
      component: p2,
      data: { animationState: 'Two' }
    },
    {
      path: 'three',
      component: p3,
      data: { animationState: 'One' }
    },
    {
      path: 'four',
      component: p4,
      data: { animationState: 'Two' }
    },
    {
      path: 'five',
      component: p5,
      data: { animationState: 'One' }
    },
    //{path: '**', redirectTo:''}

  ]
},
{path:'curso1.2', component:Curso12Component,
children: [
  { path: 'one',
  component: Page1Component,
  data: { animationState: 'One' }},
  {
    path: 'two',
    component: Page2Component,
    data: { animationState: 'Two' }
  },
  {
    path: 'three',
    component: p3,
    data: { animationState: 'One' }
  },
  {
    path: 'four',
    component: p4,
    data: { animationState: 'Two' }
  },
  {
    path: 'five',
    component: p5,
    data: { animationState: 'One' }
  },
  //{path: '**', redirectTo:''}

]
},

{path:'curso1.3', component:Curso13Component,
children: [
  { path: 'one',
  component: C13p1Component,
  data: { animationState: 'One' }},
  {
    path: 'two',
    component: C13p2Component,
    data: { animationState: 'Two' }
  },
  {
    path: 'three',
    component: C13p3Component,
    data: { animationState: 'One' }
  },
  {
    path: 'four',
    component: p4,
    data: { animationState: 'Two' }
  },
  {
    path: 'five',
    component: p5,
    data: { animationState: 'One' }
  },
  //{path: '**', redirectTo:''}

]
},


{path:'curso1.4', component:Curso14Component,
children: [
  { path: 'one',
  component: C14p1Component,
  data: { animationState: 'One' }},
  {
    path: 'two',
    component: C14p2Component,
    data: { animationState: 'Two' }
  },
  {
    path: 'three',
    component: C14p3Component,
    data: { animationState: 'One' }
  },
  {
    path: 'four',
    component: C14p4cComponent,
    data: { animationState: 'Two' }
  },
  {
    path: 'five',
    component: p5,
    data: { animationState: 'One' }
  },
  //{path: '**', redirectTo:''}

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
{path:'curso1', component:Curso1Component,
  children: [
    { path: 'one',
    component: Page1Component,
    data: { animationState: 'One' }},
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



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
