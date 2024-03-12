import { Component, OnInit } from '@angular/core';
import { NextslideService } from 'src/app/service/nextslide.service';

@Component({
  selector: 'app-c14p3',
  templateUrl: './c14p3.component.html',
  styleUrls: ['./c14p3.component.scss']
})
export class C14p3Component implements OnInit {

  constructor(private data: NextslideService) { }

  ngOnInit() {
    this.data.changeIsNextReady(false);
    document.getElementById('downloadButton')?.addEventListener('click', () => {
      console.log('File downloaded');
      this.data.changeIsNextReady(true);
    });
  }

  
  }