import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NextslideService } from 'src/app/service/nextslide.service';

@Component({
  selector: 'app-c14p2',
  templateUrl: './c14p2.component.html',
  styleUrls: ['./c14p2.component.scss']
})
export class C14p2Component implements OnInit {
  text:string ="";
 
  secondslide:boolean = false;

  text1:string = "Reglas Básicas de Tránsito en Planta:<br>";
 
  slideTextClass: string = "slidertext";//to restart class animation

  constructor(private renderer: Renderer2, private el: ElementRef,private nextSlideService: NextslideService) { }


  ngOnInit(): void {
    this.nextSlideService.changeIsNextReady(false);
    this.text = " En esta planta, la preferencia la tiene el montacarguista. <br> <br>    Queda estrictamente prohibido el uso de montacargas sin entrenamiento previo.";
    setTimeout(() => {
      this.text = this.text1;
      this.secondslide = true;
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