import { Component, OnInit } from '@angular/core';
import { ToastServiceService } from 'src/app/service/toast-service.service';

@Component({
  selector: 'app-c12p3',
  templateUrl: './c12p3.component.html',
  styleUrls: ['./c12p3.component.scss']
})
export class C12p3Component implements OnInit {

  constructor(private toastSerive:ToastServiceService) { }

  ngOnInit(): void {

    this.toastSerive.show('Progreso', "Continua así para completar el curso",15);
  }

}
