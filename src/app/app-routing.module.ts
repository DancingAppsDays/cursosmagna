import { NgModule } from '@angular/core';

import { Epp1Component } from './component/epp1/epp1.component';
import { Epp2Component } from './component/epp2/epp2.component';
import { Curso1Component } from './curso1/curso1.component';
import { Page1Component } from './curso1/page1/page1.component';
import { Page2Component } from './curso1/page2/page2.component';
import { Cursotest1Component } from './component/cursotest1/cursotest1.component';

import { Page1Component as p1 } from './component/cursotest1/page1/page1.component';
import { Page2Component as p2 } from './component/cursotest1/page2/page2.component';
import { Page3Component as p3 } from './component/cursotest1/page3/page3.component';
import { Page4Component as p4 } from './component/cursotest1/page4/page4.component';
import { RouterModule, Routes } from '@angular/router';
import { TestingmagnaComponent } from './testingmagna/testingmagna.component';
import { MenumodulosComponent } from './component/menumodulos/menumodulos.component';

const routes: Routes = [

 // {path:'epp1',component:Epp1Component , data: { animationState: 'One' }},
  //{path:'epp2',component:Epp2Component , data: { animationState: 'Two' }},
  
  {path:'menumodulo',component:MenumodulosComponent},
  {path:'test',component:TestingmagnaComponent},
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
