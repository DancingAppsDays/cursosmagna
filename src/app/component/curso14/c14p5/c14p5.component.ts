import { Component, OnInit } from '@angular/core';
import { ToastServiceService } from 'src/app/service/toast-service.service';

@Component({
  selector: 'app-c14p5',
  templateUrl: './c14p5.component.html',
  styleUrls: ['./c14p5.component.scss']
})
export class C14p5Component implements OnInit {

  constructor(private toastService:ToastServiceService) { }

  ngOnInit(): void {
    this.toastService.show('Progreso', "Continua así para completar el curso",40);
  }

}
