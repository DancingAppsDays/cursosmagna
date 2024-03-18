import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { catchError, forkJoin } from 'rxjs';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-verestudiante',
  templateUrl: './verestudiante.component.html',
  styleUrls: ['./verestudiante.component.scss']
})
export class VerestudianteComponent implements OnInit {

  datarouted:any;
  data:any;
  partialdata:any;
  
  page: number=1;
  searchterm:string='';



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


 // formu: FormGroup;
  form1data: FormGroup;
  form2data: FormGroup;
  form3data: FormGroup;
  form1active: boolean = false;
  form2active: boolean = false;






  constructor(private formBuilder: FormBuilder, private router: Router,  private http :HttpClient,
    private router2: ActivatedRoute,) { }

  ngOnInit(): void {

    this.form1data = this.formBuilder.group({});
    for (let i = 1; i <= this.questions.length; i++) {
      this.form1data.addControl(`a${i}`, new FormControl('', Validators.required));
    }

    this.form2data = this.formBuilder.group({});
    for (let i = 1; i <= this.questions.length; i++) {
      this.form2data.addControl(`a${i}`, new FormControl('', Validators.required));
    }

    if(Constants.usertype!="admin") { 
    this.router.navigate(['/'])
    return

   
  }

  this.router2.queryParams.subscribe(async (params:Params) =>{
  
    this.datarouted=params
    console.log(this.datarouted)
    console.log(this.datarouted.name);
    //this.formu.get('id')?.setValue(this.datarouted.id);
   // console.log(this.datarouted)
        this.showResults(this.datarouted);
   
});


  }

  showResults(datarouted:any){

   // console.log(datarouted.id);
    const getRequests = [
    
    this.http.get(Constants.URL+"quiz1/"+datarouted.id).pipe(catchError(error => {console.log("error retrieving quiz1"); return "error"}) ),
    this.http.get(Constants.URL+"quiz2/"+datarouted.id).pipe(catchError(error => {console.log("error retrieving quiz2"); return "error"}) ),
    this.http.get(Constants.URL+"quiz3/"+datarouted.id).pipe(catchError(error => {console.log("error retrieving quiz3"); return "error"}) ),
      ]
    //);



    //  this.data = [];

     
    forkJoin(getRequests).subscribe(responses => {
      //this.data = ([] as object[]).concat(...responses.map(response => response as object[]));
      responses.forEach((response,index) => {
        this.partialdata = response;
       // console.log(this.partialdata);
       //this.data = this.data.concat(this.partialdata['data']);
          
        if (this.partialdata['status'] === 'success' && this.partialdata['data'] !== null) {
          
          if (this.data === undefined) {

            
            this.data =  Array.isArray(this.partialdata['data']) ? this.partialdata['data'] : [this.partialdata['data']];
                    

          } else{            
            this.data = this.data.concat(this.partialdata['data']);           
          }

            
          // Set form data based on index
      if (index === 0) {
        //console.log(this.form1data.value);
                this.patchform1(this.partialdata['data']);
                //console.log(this.form1data.value);
      } else if (index === 1) {
        this.patchform2(this.partialdata['data']);
        //this.form2data = this.partialdata['data'];
      } else if (index === 2) {
        this.patchform2(this.partialdata['data']);
        //this.form3data = this.partialdata['data'];
      }
          //console.log(this.data);
        }
      });
     // console.log(this.data);
    });

    
  }

  patchform1(formdata: any) {
    this.form1data.setValue({
      a1: formdata.a1,
      a2: formdata.a2,
      a3: formdata.a3,
      a4: formdata.a4,
      a5: formdata.a5
    });

  }

  patchform2(formdata: any) {
    this.form2data.setValue({
      a1: formdata.a1,
      a2: formdata.a2,
      a3: formdata.a3,
      a4: formdata.a4,
      a5: formdata.a5
    });

  }




  verRes(index:number){
    //console.log(index);
   // console.log(this.data[index]);
    //console.log(this.form1data.value);

    if (index === 0) {
    if(this.form1active){
      this.form1active=false;
     
    }else{
      this.form1active=true;
       this.form2active=false;
       //this.form3active=false;
       //this.form3active=false;
    }
  } else if (index === 1) {
    if(this.form2active){
      this.form2active=false;
     
    }else{
      this.form2active=true;
       this.form1active=false;
       //this.form3active=false;
       //this.form3active=false;
    }

  }


  }
  incrementIndex(index: number) {
    return index + 1;
  }
}
