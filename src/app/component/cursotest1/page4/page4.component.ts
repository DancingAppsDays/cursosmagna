import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NextslideService } from 'src/app/service/nextslide.service';
import {NgbModule, NgbTooltip} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss'],


 // standalone: true,
  //imports: [ NgbTooltip,    NgbModule]
})
export class Page4Component implements OnInit {
  constructor(private data: NextslideService) { }

  ngOnInit() {
    this.data.changeIsNextReady(false);
    document.getElementById('downloadButton')?.addEventListener('click', () => {
      console.log('File downloaded');
      this.data.changeIsNextReady(true);
    });
  }

  
  }
  
  


   
