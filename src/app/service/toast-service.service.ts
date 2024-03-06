import { Injectable } from '@angular/core';
import { ToastProgressComponent } from '../component/toast-progress/toast-progress.component';

export interface ToastInfo {
  header: string;
  body: string;
  delay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {

  toasts: ToastInfo[] = [];


  //constructor() { }
show(header:string, body:string){
  console.log(header + " " + body)
  this.toasts.push({header,body})
  console.log("pushedd");
}

/*
show(toast:ToastProgressComponent){
  this.toasts.push(toast)
}*/


// method to remove an existing toast from the collection is also implemented.
remove(toast: ToastInfo) {
  this.toasts = this.toasts.filter(t => t != toast);
}
clear() {
  this.toasts.splice(0, this.toasts.length);
}


}
