import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menumodulos',
  templateUrl: './menumodulos.component.html',
  styleUrls: ['./menumodulos.component.scss']
})
export class MenumodulosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  gotomodulo(){
    console.log('goto modulo');
  }

}
