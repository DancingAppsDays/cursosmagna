import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from '../constants';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.scss']
})
export class ResetpassComponent implements OnInit {


  public ff: FormGroup = new FormGroup({});
  public loginsubmitted: Boolean = false;
  public successdata: any;

  constructor(private fb: FormBuilder, private router: Router, private activatedroute: ActivatedRoute, private htt: HttpClient) { }

  ngOnInit(): void {

    const token = this.activatedroute.snapshot.paramMap.get('token');

    this.ff = this.fb.group({
      // name: ['', Validators.required,],
      email: ['', Validators.required],  //was username....
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', [Validators.required, Validators.minLength(6)]],
      token: [token, Validators.required]
    },
      { validator: this.passwordMatchValidator });

  }


  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('password_confirmation')?.value
      ? null : { 'mismatch': true };
  }



  onLogoutSubmit() {

    return this.htt.post(Constants.URL + "Logout", this.loginsubmitted/*,{ headers: { Authorization:localStorage.getItem('token') } }*/).subscribe((res) => {
      this.successdata = res;

      if (this.successdata['status'] == "success") {
        window.alert("Usuario " + sessionStorage['name'] + " cerró sesion");    //WAS sstorage.name before
        localStorage.clear();
        sessionStorage.clear();
        //this.successdata['data']['name']+" has been Login successfully");
      }
      else {
        console.log(res);
        sessionStorage.clear();   //regardless?? ? //Frontend validation primero, no importa que siga validado en server
      }

      //window.alert("unknown erorr at lougout");

    });
  }

  postuser(customerData: any) {
    //var data:Responsetype;
    customerData['type'] = "user";

    //Constants.URL
    this.htt.post(Constants.URL + "password/reset", customerData/*,  { headers: { Authorization:localStorage.getItem('token') } }*/).subscribe({
      next: data => {
        console.log(data);
        //window.alert("Elemento modificado correctamente");
        //this.router.navigate(['/']);
        this.successdata = data;

        if (this.successdata['status'] == 'success') {

          // window.alert("Usuario agregado correctamente");

          window.alert("Tu contraseña ha sido actualizada.");
          this.GotoLogin();




        } else {
          //console.log(this.successdata)
          window.alert("Hubo un error, Intenta de nuevo.");
        }
        //this.router.navigate(['/']);



      }, error:
        error => {
          window.alert("Error de conexión");   //error.message);
          console.log(error);
        }
    });

  }







  onLoginSubmit(logindata: any) {

    console.log(logindata);
    return this.htt.post(Constants.URL + "Login", logindata).subscribe((res) => {
      this.successdata = res;
      // let resp:any = res;

      console.log(res);

      if (this.successdata['status'] == "success") {
        window.alert("Bienvenido " + this.successdata['data']['name'] + " a la plataforma CIET");

        let token = this.successdata['data']['access_token'];  //was res but cant be used like this anymopre
        localStorage.setItem("access_token", token);//already set on authintercept//'Bearer ' +token);

        sessionStorage.setItem("name", this.successdata['data']['name']);

        //console.log( this.successdata['payload'])
        Constants.userId = this.successdata['data']['id'];
        Constants.session = true;
        Constants.usertype = this.successdata['data']['type'];

        //console.log(Constants.usertype)
        // sessionStorage.setItem("session","true");                       //experimental sess
        //sessionStorage.setItem("usertype",this.successdata['payload']['usertype']); 

        //AppComponent.myapp.usertype = this.successdata['payload']['usertype'];



        if (Constants.usertype == "admin" || Constants.usertype == "superadmin") {
          sessionStorage.setItem('isGuest', 'false');
          this.router.navigate(['/adminmenu'],);
        } else {
          //this.router.navigate(['/menumodulo']);
          sessionStorage.setItem('isGuest', 'false');
          this.router.navigate(['/menumodulo']);
        }
        // console.log(Constants.usertype)



      } else if (this.successdata['status'] == "error") {
        console.log("ERROR no coinciden")
        window.alert(this.successdata['message']);//"Datos de login incorrectos");
        /* Swal.fire({
         title: 'OPPS!!',
         text:   "Login details are not coreect.",
         icon: 'error'
       });*/
      } else {
        window.alert("unknown BUG");
      }

      //


    },
      error => {
        window.alert("Error de conexión");   //error.message);
        console.log(error);
      }

    );
  }


  GotoLogin() {
    this.router.navigate(['/login1']);
  }

}