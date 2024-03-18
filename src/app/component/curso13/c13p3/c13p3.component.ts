import { Component, OnInit } from '@angular/core';
import { NextslideService } from 'src/app/service/nextslide.service';

@Component({
  selector: 'app-c13p3',
  templateUrl: './c13p3.component.html',
  styleUrls: ['./c13p3.component.scss'],
 
})
export class C13p3Component implements OnInit {
  constructor(private data: NextslideService) { }

  ngOnInit() {
   // this.data.changeIsNextReady(false);
    document.getElementById('downloadButton')?.addEventListener('click', () => {
      console.log('File downloaded');
      this.data.changeIsNextReady(true);
    });
  }

  
  }