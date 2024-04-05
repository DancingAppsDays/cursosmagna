import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants';
import { NextslideService } from 'src/app/service/nextslide.service';

@Component({
  selector: 'app-c02p5c',
  templateUrl: './c02p5c.component.html',
  styleUrls: ['./c02p5c.component.scss']
})
export class C02p5cComponent implements OnInit {

  q1: string = "1. Es regla de 0 tolerancia realizar trabajos peligrosos sin Elaborar AST.";
  q2: string = "2. Es valido entregar únicamente una copia de comprobante de incapacidad";
  q3: string = "3. Realizar trabajos en Espacios Confinados y de Mantenimiento a Instalaciones Eléctricas requiere de Capacitación y AST.";
  q4: string = "4. Es la acción u omisión del trabajador que crea un riesgo contra su seguridad y/o la de sus compañero.";
  q5: string = "5. Es el estado de algo que no brinda seguridad o que supone un peligro para la gente.";
  questions = [this.q1, this.q2, this.q3, this.q4, this.q5];

  a1 = ["Verdadero", "Falso"];
  a2 = ["Verdadero", "Falso"];
  a3 = ["Verdadero", "Falso"];
  a4 = ["Acto inseguro", "Condición Insegura"];
  a5 = ["Acto inseguro", "Condición Insegura"];
  answers = [this.a1, this.a2, this.a3, this.a4, this.a5];


  formu: FormGroup;
  successdata: any;
  isdone: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private nextslide: NextslideService) {

    this.formu = this.formBuilder.group({});
    for (let i = 1; i <= this.questions.length; i++) {
      this.formu.addControl(`a${i}`, new FormControl('', Validators.required));
    }

    if (sessionStorage.getItem("quiz2") != "1") {
      this.nextslide.changeIsNextReady(false);
    }
  }

  ngOnInit(): void {


    /*
    this.formu = this.formBuilder.group({
      //id:'',
      a1:['',[Validators.required,]],
      a2:['',[Validators.required,]],
      a3:['',[Validators.required,]],
      a4:['',[Validators.required,]],
      a5:['',[Validators.required,]],
      */

    //this.nextslide.changeIsNextReady(false);//cause error expresion changed after it was checked

    //todo check with id in quiz1 is already done

    /*
          if(this.isdone){
            setTimeout(() => {
              this.nextslide.changeIsNextReady(true);
            });
          }*/

  }

  incrementIndex(index: number) {
    return index + 1;
  }

  getScore(formu: any): number {

    //TODO compare with actual right answers istead of to 1;

    let score = 0;
    for (let i = 1; i <= this.questions.length; i++) {
      if (formu[`a${i}`] == "1") {
        score += 1;
      }
    }
    return score;

  }

  onSubmit(formu: any) {

    console.log("Submitted");
    console.log(formu);

    //formu.value.idalumno = Constants.userId;
    formu['idalumno'] = Constants.userId;
    formu['nombrealumno'] = sessionStorage.getItem("name");// "erasefromodel";

    formu['score'] = this.getScore(formu);


    this.http.post(Constants.URL + "quiz2", formu).subscribe({
      next: res => {
        console.log(res);
        this.successdata = res;
        this.successdata = this.successdata['data'];
        console.log(this.successdata);

        window.alert("Quiz completado");
        this.nextslide.changeIsNextReady(true);

        sessionStorage.setItem("quiz2", "1");

        this.nextslide.triggerNextSlide();
      },
      error: error => {
        window.alert("Error al enviar datos, intente de nuevo.");
        console.log(error)
      }
    });

  }
}
