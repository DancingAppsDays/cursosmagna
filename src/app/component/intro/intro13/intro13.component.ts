import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro13',
  templateUrl: './intro13.component.html',
  styleUrls: ['./intro13.component.scss']
})
export class Intro13Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("cursos","0");
  }

}
