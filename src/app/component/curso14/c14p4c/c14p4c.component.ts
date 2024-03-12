import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c14p4c',
  templateUrl: './c14p4c.component.html',
  styleUrls: ['./c14p4c.component.scss']
})
export class C14p4cComponent implements OnInit {

    q1: string = "Es regla de 0 tolerancia realizar trabajos peligrosos sin Elaborar AST.";
    q2: string = "Es valido entregar únicamente una copia de comprobante de incapacidad";
    q3: string = "3.  Realizar trabajos en Espacios Confinados y de Mantenimiento a Instalaciones Eléctricas requiere de Capacitación y AST.";
    q4: string = "4.  Es la acción u omisión del trabajador que crea un riesgo contra su seguridad y/o la de sus compañero.";
    q5: string = "5. 5. Es el estado de algo que no brinda seguridad o que supone un peligro para la gente.";
    questions = [this.q1, this.q2, this.q3, this.q4, this.q5];

    a1=["Verdadero", "Falso"];
    a2=["Verdadero", "Falso"];
    a3=["Verdadero", "Falso"];
    a4=["Acto inseguro", "Condición Insegura"];
    a5=["Acto inseguro", "Condición Insegura"];
    answers = [this.a1, this.a2, this.a3, this.a4, this.a5];
  constructor() { }

  ngOnInit(): void {
  }

}
