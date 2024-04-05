import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-addtester',
  templateUrl: './addtester.component.html',
  styleUrls: ['./addtester.component.scss']
})
export class AddtesterComponent implements OnInit {

  formu: FormGroup = new FormGroup({});

  successdata: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient,
    private router2: ActivatedRoute, /*private alertService: AlertService*/) { }

  ngOnInit(): void {

    if(Constants.usertype!="admin" && Constants.usertype != "superadmin"){
      this.router.navigate(['/'])
      return
    }
    //if(Constants.usertype!="Admin")this.router.navigate(['/'])

    //this should be taken from entity
    this.formu = this.formBuilder.group({
        //id:'',
        name:['',[Validators.required,]],
        //birthday:"2000-01-15",
        email:['',[Validators.required,]],
        password:['',[Validators.required,]],
        //area:''//this didnt crashed the system
    });
  }


    getAlumno(index: number) //check if number..
    { 
      /*
      //this.http.get(Constants.URL+"alumno"+'/'+index).subscribe(
        {
            next: res=> {
                console.log(res);
               
                this.dataalumno= res ;
                this.dataalumno = this.dataalumno['data']
                //console.log(this.dataalumno)
                this.updateform(this.dataalumno);
  
  
  
            },
            error:error=>console.log(error)
  
        
   
          // this.updateform(this.exs);
          
         } );*/
    }
  
  
    onSubmit(formudata:any){
  
     //if(this.datarouted.id !=undefined){     
        //console.log("not null patch no post");
        //this.putmaestro(formudata,Number(this.datarouted.id))
   // }else{
      this.postuser(formudata);
    //}
    }

    postuser(customerData :any)
 {
  //var data:Responsetype;
  customerData['type']="user";
 
  //Constants.URL
   this.http.post(Constants.URL+"alumno",customerData/*,  { headers: { Authorization:localStorage.getItem('token') } }*/).subscribe({
    next: data =>
      {//console.log(data);
        //window.alert("Elemento modificado correctamente");
        //this.router.navigate(['/']);
        this.successdata= data;

        if(this.successdata['status']=='success'){

        window.alert("Usuario agregado correctamente");
            this.formu.reset();

        }else{
          //console.log(this.successdata)
          window.alert("  Registro falló, revisa que el correo no sea repetido");
        }
        //this.router.navigate(['/']);
       


       }, error:
      error =>{ window.alert("  Registro falló");
      console.log(error);}
       });
   
     }
  


  }


