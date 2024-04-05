import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.scss']
})
export class AdminmenuComponent implements OnInit {

  constructor() { }
usertype:string;
  ngOnInit(): void {
    this.usertype=Constants.usertype;

  }

}
