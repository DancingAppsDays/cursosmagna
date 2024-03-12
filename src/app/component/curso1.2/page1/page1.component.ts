import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  dots: any[] = [];
  constructor() { }

  ngOnInit(): void {
    //this.createDots();
  }

  createDots(): void {
    this.dots = [];
    for (let i = 0; i < 100; i++) {
      this.dots.push({
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        x: "1x",
        y: "111px"
      });
    }
  }

  getTransform(dot: any) {
    return `translate(${dot.x}, ${dot.y})`;
  }
}