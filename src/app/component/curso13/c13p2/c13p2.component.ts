import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NextslideService } from 'src/app/service/nextslide.service';

@Component({
  selector: 'app-c13p2',
  templateUrl: './c13p2.component.html',
  styleUrls: ['./c13p2.component.scss']
})
export class C13p2Component implements OnInit {
  text:string ="";
  subtext:string=""

  text1:string = "Trabajos que requieren AST obligatorio:";
  subtext2:string = " Loto<br>  Instalaciones eléctricas<br>  Corte y Soldadura<br>  Espacios Confinados<br>   <br><br>  ";
 
  slideTextClass: string = "slidertext";//to restart class animation

  constructor(private renderer: Renderer2, private el: ElementRef,private nextSlideService: NextslideService) { }


  ngOnInit(): void {
    this.nextSlideService.changeIsNextReady(false);
    this.text = ' Tipos de Peligro en Magna Celaya:<br> ';
    this.subtext="Físicos<br>    Químicos<br>    Biológicos<br>    Ergonómicos    ";
    setTimeout(() => {
      this.text = this.text1;
      this.subtext = this.subtext2;
      this.restartAnimation();    
          setTimeout(() => {
            this.nextSlideService.changeIsNextReady(true);
          }, 6000);
        }, 6000);
     
  }
  
  restartAnimation(): void {
    const textElement = this.el.nativeElement.querySelector('.slidertext');
  this.renderer.removeClass(textElement, 'slidertext');
  // force a reflow
  void textElement.offsetWidth;
  this.renderer.addClass(textElement, 'slidertext');
  }
}