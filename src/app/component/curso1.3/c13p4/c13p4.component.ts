import { Component, OnInit } from '@angular/core';
import { ToastServiceService } from 'src/app/service/toast-service.service';

@Component({
  selector: 'app-c13p4',
  templateUrl: './c13p4.component.html',
  styleUrls: ['./c13p4.component.scss']
})
export class C13p4Component implements OnInit {

  constructor(private toastService:ToastServiceService) { }

  ngOnInit(): void {
    this.toastService.show('Progreso', "Continua así para completar el curso",30);
  }

}
