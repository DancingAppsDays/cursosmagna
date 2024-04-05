import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro12',
  templateUrl: './intro12.component.html',
  styleUrls: ['./intro12.component.scss']
})
export class Intro12Component implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustIframeSize();
  }
  constructor(private el: ElementRef) {

  }
  ngAfterViewInit(): void {
    this.adjustIframeSize();
  }

  ngOnInit(): void {
    localStorage.setItem("cursos", "0");
  }

  adjustIframeSize() {
    const aspectRatio = 9 / 16;
    const newHeight = window.innerWidth * aspectRatio;
    if (newHeight > window.innerHeight) {
      const newWidth = window.innerHeight / aspectRatio;
      this.el.nativeElement.querySelector('.aspect-ratio-box').style.width = `${newWidth}px`;
    } else {
      this.el.nativeElement.querySelector('.aspect-ratio-box').style.width = '100%';
    }
  }

}
