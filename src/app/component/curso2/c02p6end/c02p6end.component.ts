import { Component, OnInit } from '@angular/core';
import { ToastServiceService } from 'src/app/service/toast-service.service';

@Component({
  selector: 'app-c02p6end',
  templateUrl: './c02p6end.component.html',
  styleUrls: ['./c02p6end.component.scss']
})
export class C02p6endComponent implements OnInit {

  constructor(private toastService:ToastServiceService) { }

  ngOnInit(): void {
    this.toastService.show('Progreso', "Continua así para completar el curso",55);
  }

}
