import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NextslideService } from 'src/app/service/nextslide.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  text:string ="";
  secondslide:boolean = false;
  thirdslide:boolean = false;

  text1:string = "Trabajar sin Loto.<br>                 Trabajos críticos sin capacitación previa.<br>                Realizar trabajos de riesgo sin AST.<br>                 Interacción con montacargas sin capacitación.<br>                Fumar en planta.";
  text2:string = "   Si no has recibido entrenamiento especializado en:<br> ";
   text3:string = "First value";

  slideTextClass: string = "slidertext";//to restart class animation

  constructor(private renderer: Renderer2, private el: ElementRef,private nextSlideService: NextslideService) { }


  ngOnInit(): void {
    this.nextSlideService.changeIsNextReady(false);
    this.text = ' Es importante recordar:';
    setTimeout(() => {
      this.text = ' Políticas de cero tolerancia MAGNA.';
      this.secondslide = true;
      this.restartAnimation();
      setTimeout(() => {
        this.secondslide = false;
        this.thirdslide = true;
        this.text =  this.text2;
        this.restartAnimation();
        setTimeout(() => {
          this.nextSlideService.changeIsNextReady(true);
        }, 5000);
      }, 6000);
    }, 3000);
  }
  
  restartAnimation(): void {
    const textElement = this.el.nativeElement.querySelector('.slidertext');
  this.renderer.removeClass(textElement, 'slidertext');
  // force a reflow
  void textElement.offsetWidth;
  this.renderer.addClass(textElement, 'slidertext');
  }
}