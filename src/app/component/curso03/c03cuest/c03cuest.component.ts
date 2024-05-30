import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants';
import { NextslideService } from 'src/app/service/nextslide.service';

@Component({
  selector: 'app-c03cuest',
  templateUrl: './c03cuest.component.html',
  styleUrls: ['./c03cuest.component.scss']
})
export class C03cuestComponent implements OnInit {

  q1: string = "1. En caso de emergencia y activación de alarma, puedes continuar tus labores hasta que tu supervisor te pida evacuar.";
  q2: string = "2. Los 3 puntos de Reunión en caso de evacuación son : Avenida Mexico/Japón detrás de calderas,  Estacionamiento de terracería y:";
  q3: string = "3. El fuego de Líquidos inflamables como pinturas, gasolina, aceites.. es un fuego de:";
  q4: string = "4. Los apagones son una situación en la cual debes evacuar.";
  q5: string = "5. Cualquier persona puede iniciar acciones de combate contra incendio aunque no sea brigadista";

  //questions = [this.q1, this.q2, this.q3, this.q4, this.q5];
  questions = [this.q1, this.q2, this.q3, this.q4, this.q5];

  a1 = ["Dispositivo de bloqueo (Candado Loto)", "Dispositivo de Seguridad"];
  a2 = ["Procedimiento Lock Out / Tag Out (LOTO)", "Guardia de seguridad"];
  a3 = ["Verdadero", "Falso"];
  a4 = ["Falso", "Verdadero"];
  a5 = ["1 Prepare, 2 Avise, 3 Aisle, 4 Apague", "1 Prepare, 2 Avise, 3 Apague, 4 Aisle", "1 Apague, 2 Avise, 3 Aisle, 4 Coloque candado y tarjeta"];

  answers = [this.a1, this.a2, this.a3, this.a4, this.a5];


  correctAnswers = ["2", "1", "2", "2", "2"];


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

    if (sessionStorage.getItem("quiz3") != "1") {
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
    // console.log(formu);

    let score = 0;
    for (let i = 0; i < this.questions.length; i++) {

      //  console.log("a" + (i + 1) + " : " + formu.get(`a${i + 1}`).value + " == " + this.correctAnswers[i]);
      //  console.log(formu.get(`a${i + 1}`).value);

      if (formu.get(`a${i + 1}`).value == this.correctAnswers[i]) {
        score += 1;
      }
    }

    console.log("Score: " + score);
    return score;

  }

  validateScore() {

    // console.log(this.formu);
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

    this.http.post(Constants.URL + "quiz3", formu).subscribe({
      next: res => {
        console.log(res);
        this.successdata = res;
        this.successdata = this.successdata['data'];
        console.log(this.successdata);

        window.alert("Quiz completado");
        this.nextslide.changeIsNextReady(true);

        sessionStorage.setItem("quiz3", "1");

        this.nextslide.triggerNextSlide();
      },
      error: error => {
        window.alert("Error al enviar datos, intente de nuevo.");
        console.log(error)
      }
    });

  }
}
