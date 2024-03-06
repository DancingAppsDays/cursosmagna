import { Component, OnInit } from '@angular/core';
import { ToastServiceService } from 'src/app/service/toast-service.service';

@Component({
  selector: 'app-toast-progress',
  templateUrl: './toast-progress.component.html',
  styleUrls: ['./toast-progress.component.scss']
})
export class ToastProgressComponent implements OnInit {

  constructor(public toastService:ToastServiceService) { }

  ngOnInit(): void {
  }

}
