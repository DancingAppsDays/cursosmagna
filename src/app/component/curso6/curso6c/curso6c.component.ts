import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants';
import { NextslideService } from 'src/app/service/nextslide.service';

@Component({
  selector: 'app-curso6c',
  templateUrl: './curso6c.component.html',
  styleUrls: ['./curso6c.component.scss']
})
export class Curso6cComponent implements OnInit {

  q1: string = "1. Se recomienda el uso de aire comprimido para una perfecta limpieza de su área de trabajo.";
  q2: string = "2. E aire comprimido es de uso exclusivo de las actividades de sopleteo de moldes y piezas y de las actividades de aplicación";
  q3: string = "3. Soplar aire comprimido hacia su cuerpo con el riesgo de que ingrese al torrente sanguíneo puede provocar aeroembolismo.";


  //questions = [this.q1, this.q2, this.q3, this.q4, this.q5];
  questions = [this.q1, this.q2, this.q3,];

  a1 = ["Verdadero", "Falso"];
  a2 = ["Verdadero", "Falso"];
  a3 = ["Verdadero", "Falso"];



  answers = [this.a1, this.a2, this.a3,];


  correctAnswers = ["2", "1", "1"];


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

    if (sessionStorage.getItem("quiz6") != "1") {
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

      //console.log("a" + (i + 1) + " : " + formu.get(`a${i + 1}`).value + " == " + this.correctAnswers[i]);
      // console.log(formu.get(`a${i + 1}`).value);

      if (formu.get(`a${i + 1}`).value == this.correctAnswers[i]) {
        score += 1;
      }
    }

    //console.log("Score: " + score);
    return score;

  }

  validateScore() {

    console.log(this.formu);
    var score = this.getScore(this.formu);

    if (score < 3) {
      window.alert("No has aprobado el quiz, intentalo de nuevo.");
      //this.formu.reset();
      return;
    } else {
      this.onSubmit(this.formu);
    }
  }



  onSubmit(formg: any) {

    console.log("Submitted");
    let formu = formg.value;
    //console.log(formu);

    //formu.value.idalumno = Constants.userId;
    formu['idalumno'] = Constants.userId;
    formu['nombrealumno'] = sessionStorage.getItem("name");// "erasefromodel";

    formu['score'] = this.getScore(formg);


    this.http.post(Constants.URL + "quiz6", formu).subscribe({
      next: res => {
        console.log(res);
        this.successdata = res;
        this.successdata = this.successdata['data'];
        console.log(this.successdata);

        window.alert("Quiz completado, Calificación: " + formu['score'] + "/3");
        this.nextslide.changeIsNextReady(true);

        sessionStorage.setItem("quiz6", "1");

        this.nextslide.triggerNextSlide();
      },
      error: error => {
        window.alert("Error al enviar datos, intente de nuevo.");
        console.log(error)
      }
    });

  }
}
