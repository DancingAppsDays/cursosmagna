import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants';
import { NextslideService } from 'src/app/service/nextslide.service';

@Component({
  selector: 'app-c042-c',
  templateUrl: './c042-c.component.html',
  styleUrls: ['./c042-c.component.scss']
})
export class C042CComponent implements OnInit {

  q1: string = "1. El Equipo de Protección Personal (EPP) evita el accidente";
  q2: string = "2. El Equipo de Protección Personal (EPP) debe seleccionarse en base al área y el tipo de trabajo.";
  q3: string = "3. ¿Que norma de la STPS establece las condiciones de seguridad en los centros de trabajo donde se genere ruido?";
  q4: string = "4. Me expongo a una suspensión de 1 a 8 días laborales sin goce de sueldo si uso el EPP incorrecto o incompleto en mi área de trabajo.";
  q5: string = "5. Puedo prestar mi EPP a un compañero en caso de que me lo solicite.  ";

  //questions = [this.q1, this.q2, this.q3, this.q4, this.q5];
  questions = [this.q1, this.q2, this.q3, this.q4, this.q5];

  a1 = ["Verdadero", "Falso"];
  a2 = ["Verdadero", "Falso"];
  a3 = ["NOM 011 STPS", "NOM 017 STPS", "NOM 002 STPS"];
  a4 = ["Falso", "Verdadero"];
  a5 = ["Verdadero", "Falso"];


  answers = [this.a1, this.a2, this.a3, this.a4, this.a5];


  correctAnswers = ["2", "1", "1", "2", "2"];


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

    if (sessionStorage.getItem("quiz4") != "1") {
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

    if (score < 4) {
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


    this.http.post(Constants.URL + "quiz4", formu).subscribe({
      next: res => {
        console.log(res);
        this.successdata = res;
        this.successdata = this.successdata['data'];
        console.log(this.successdata);

        window.alert("Quiz completado");
        this.nextslide.changeIsNextReady(true);

        sessionStorage.setItem("quiz4", "1");

        this.nextslide.triggerNextSlide();
      },
      error: error => {
        window.alert("Error al enviar datos, intente de nuevo.");
        console.log(error)
      }
    });

  }
}
