import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NextslideService } from 'src/app/service/nextslide.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  text:string ="";

  text1:string = "Las Incapacidades por enfermedad general son pagadas al 60% del salario diario integrado.<br><br>       Los primeros días de incapacidad no son pagados. ";
  text2:string = " Las incapacidades por maternidad o accidente laboral son pagadas al 100% de tu salario diario integrado. <br><br>  ";
   text3:string = " Podrás cobrar tus incapacidades una vez que el IMSS libere el pago, en las sucursales del banco BBVA BANCOMER con: La original de la incapacidad y una identificación oficial.";

  slideTextClass: string = "slidertext";//to restart class animation

  constructor(private renderer: Renderer2, private el: ElementRef,private nextSlideService: NextslideService) { }


  ngOnInit(): void {
    this.nextSlideService.changeIsNextReady(false);
    this.text = ' Es importante recordar:<br> ';
    setTimeout(() => {
      this.text = this.text1;
      this.restartAnimation();
      setTimeout(() => {
        this.text =  this.text2;
        this.restartAnimation();
        setTimeout(() => {
          this.text =  this.text3;
        this.restartAnimation();
          setTimeout(() => {
            this.nextSlideService.changeIsNextReady(true);
          }, 5000);
        }, 5000);
      }, 7000);
    }, 4000);
  }
  
  restartAnimation(): void {
    const textElement = this.el.nativeElement.querySelector('.slidertext');
  this.renderer.removeClass(textElement, 'slidertext');
  // force a reflow
  void textElement.offsetWidth;
  this.renderer.addClass(textElement, 'slidertext');
  }
}