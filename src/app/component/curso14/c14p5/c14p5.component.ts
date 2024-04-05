import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/internal/operators/take';
import { Constants } from 'src/app/constants';
import { TimersService } from 'src/app/service/timers.service';
import { ToastServiceService } from 'src/app/service/toast-service.service';

@Component({
  selector: 'app-c14p5',
  templateUrl: './c14p5.component.html',
  styleUrls: ['./c14p5.component.scss']
})
export class C14p5Component implements OnInit {


  constructor(private toastSerive:ToastServiceService ,private http:HttpClient, private timer:TimersService) { }

  time1: string="00:00:00";

  ngOnInit(): void {

    this.toastSerive.show('Progreso', "Continua así para completar el curso",40);

    let currentstage = localStorage.getItem('cursos')?parseInt(localStorage.getItem('cursos')!):-1;
    if(currentstage < 4){
            localStorage.setItem("cursos","4");
  
  
            this.timer.currentTimer.pipe(take(1)).subscribe(time => {
              this.time1 = time;
              console.log(this.time1);
            });
              this.setcurso();   
               
  
    }else{
    console.log("Modulo repetido");
  }
  }

  successdata:any;
  studendid = Constants.userId;
  




  setcurso(){

    let postdata = {time4:this.time1 ,currentcurso:"4"};
    console.log(postdata);
    this.http.patch(Constants.URL+"curso/"+ this.studendid,postdata/*,  { headers: { Authorization:localStorage.getItem('token') } }*/).subscribe({
    next: data =>
      {//console.log(data);
        
        this.successdata= data;

        if(this.successdata['status']=='success'){
          console.log("curso actualizado");



        }else{
          //console.log(this.successdata)
         // window.alert("  Registro falló, revisa que el correo no sea repetido");
        }
      

       }, error:
      error =>{ //window.alert("  Registro falló");
      console.log(error);
    }
       });
   
     }
  
    }



