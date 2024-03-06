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
import { Page1Component } from './curso1/page1/page1.component';
import { Page2Component } from './curso1/page2/page2.component';
import { Page3Component } from './component/cursotest1/page3/page3.component';

import { Cursotest1Component } from './component/cursotest1/cursotest1.component';

import { Page1Component  as p1} from './component/cursotest1/page1/page1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Page5cuestComponent } from './component/cursotest1/page5cuest/page5cuest.component';
import { AddtesterComponent } from './component/Admin/addtester/addtester.component';
import { TestingmagnaComponent } from './testingmagna/testingmagna.component';
import { NgbModule, NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { ToastProgressComponent } from './component/toast-progress/toast-progress.component';
import { MenumodulosComponent } from './component/menumodulos/menumodulos.component';
import { IntroComponent } from './component/intro/intro.component';




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
    Cursotest1Component,

    p1,
    Page2Component,
    Page5cuestComponent,
    AddtesterComponent,
    TestingmagnaComponent,
    ToastProgressComponent,
    MenumodulosComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    NgbModule, NgbToast, NgTemplateOutlet

   // VgCoreModule,
    //VgControlsModule,
   // VgOverlayPlayModule,
   // VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
