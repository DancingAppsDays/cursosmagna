import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Constants } from 'src/app/constants';
import { NextslideService } from 'src/app/service/nextslide.service';

@Component({
  selector: 'app-c14p4c',
  templateUrl: './c14p4c.component.html',
  styleUrls: ['./c14p4c.component.scss']
})
export class C14p4cComponent implements OnInit {

  q1: string = "1. Es regla de 0 tolerancia realizar trabajos peligrosos sin Elaborar AST.";
  q2: string = "2. No hay limite de tiempo para entregar a MAGNA toda la documentación emitida por el IMSS además de la ST7 en caso de incapacidad.";
  q3: string = "3. Es tu derecho negarte a realizar un trabajo si no has recibido el entrenamiento para realizar el AST de la actividad a realizar sea rutinario o no rutinaria.";
  q4: string = "4. Es la causa (acción) humana que potencializa la situación de riesgo para que se produzca el accidente.";
  q5: string = "5. Es una situación, acto o condición capaz de provocar una lesión o enfermedad.";

  q6: string = "6. Es todo suceso imprevisto y no deseado que interrumpe o interfiere el desarrollo normal de una actividad sin consecuencias adicionales.";
  q7: string = "7. En Magna Celaya la preferencia la tiene el Montacarguista";
  q8: string = "8. La Plataforma de elevación de brazo articulada sirve tanto para elevar personas como materiales.";
  q9: string = "9. Los señalamientos de advertencia de peligro son de color:";
  q10: string = "10. Como trabajador de Magna Celaya, es tu obligación participar en todas las capacitaciones que te brindara la empresa con tal de garantizarte un entorno de trabajo seguro.";

  //questions = [this.q1, this.q2, this.q3, this.q4, this.q5];
  questions = [this.q1, this.q2, this.q3, this.q4, this.q5, this.q6, this.q7, this.q8, this.q9, this.q10];

  a1 = ["Verdadero", "Falso"];
  a2 = ["Verdadero", "Falso"];
  a3 = ["Verdadero", "Falso"];
  a4 = ["Acto inseguro", "Condición Insegura"];
  a5 = ["Riesgo", "Peligro"];

  a6 = ["Incidente", "Accidente"];
  a7 = ["Verdadero", "Falso"];
  a8 = ["Verdadero", "Falso"];
  a9 = ["Rojo", "Azul", "Amarillo", "Verde"];
  a10 = ["No", "Si"];
  answers = [this.a1, this.a2, this.a3, this.a4, this.a5, this.a6, this.a7, this.a8, this.a9, this.a10];


  correctAnswers = ["1", "2", "1", "1", "2", "1", "1", "2", "3", "2"];


  formu: FormGroup;
  successdata: any;
  isdone: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private nextslide: NextslideService) {

    this.formu = this.formBuilder.group({});
    for (let i = 0; i < this.questions.length; i++) {
      this.formu.addControl(`a${i + 1}`, new FormControl('', Validators.required));

      /*this.formu.get(`a${i + 1}`)?.valueChanges.subscribe(value => {
        console.log(`Control Name: ${`a${i + 1}`}, Value: ${value}`);
      });*/

    }

    if (sessionStorage.getItem("quiz1") != "1") {
      this.nextslide.changeIsNextReady(false);
    }

  }

  ngOnInit(): void {


    if (this.isdone) {
      setTimeout(() => {
        this.nextslide.changeIsNextReady(true);
      });
    }

  }

  incrementIndex(index: number) {
    return index + 1;
  }

  getScore(formu: any): number {

    //TODO compare with actual right answers istead of to 1;
    //console.log(formu);

    let score = 0;
    for (let i = 0; i < this.questions.length; i++) {

      // console.log("a" + (i + 1) + " : " + formu.get(`a${i + 1}`).value + " == " + this.correctAnswers[i]);
      //  console.log(formu.get(`a${i + 1}`).value);

      if (formu.get(`a${i + 1}`).value == this.correctAnswers[i]) {
        score += 1;
      }
    }

    console.log("Score: " + score);
    return score;

  }

  validateScore() {

    //console.log(this.formu);
    var score = this.getScore(this.formu);

    if (score < 8) {
      window.alert("No has aprobado el quiz, intentalo de nuevo.");
      //this.formu.reset();
      return;
    } else {
      this.onSubmit(this.formu);
    }
  }

  onSubmit(formg: any) {

    console.log("Submitted")
    console.log('formg:', formg);
    let formu = formg.value;
    console.log('formu:', formu);;
    //let formu = formg.value;
    //console.log(formu);

    //formu.value.idalumno = Constants.userId;
    formu['idalumno'] = Constants.userId;
    formu['nombrealumno'] = sessionStorage.getItem("name");// "erasefromodel";

    formu['score'] = this.getScore(formg);


    this.http.post(Constants.URL + "quiz1", formu).subscribe({
      next: res => {
        console.log(res);
        this.successdata = res;
        this.successdata = this.successdata['data'];
        console.log(this.successdata);

        window.alert("Quiz completado, Calificación: " + formu['score'] + "/10");
        this.nextslide.changeIsNextReady(true);
        sessionStorage.setItem("quiz1", "1");

        this.nextslide.triggerNextSlide();
        //
        //todo open siguiente diapositiva...
      },
      error: error => {
        window.alert("Error al enviar datos, intente de nuevo.");
        console.log(error)
      }
    });

  }
}
