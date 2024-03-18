import { Component, OnInit } from '@angular/core';
import { ToastServiceService } from 'src/app/service/toast-service.service';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})
export class Page5Component implements OnInit {

  constructor(private toastSerive:ToastServiceService) { }

  ngOnInit(): void {

    this.toastSerive.show('Progreso', "Continua así para completar el curso",10);
  }

}
