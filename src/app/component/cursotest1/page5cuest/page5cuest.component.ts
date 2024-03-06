import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormControl,ReactiveFormsModule} from '@angular/forms';
import { FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-page5cuest',
  templateUrl: './page5cuest.component.html',
  styleUrls: ['./page5cuest.component.scss']
})
export class Page5cuestComponent implements OnInit {

  constructor(  private formBuilder: FormBuilder) { }

  myForm!: FormGroup ;
  //formu:FormGroup

  ngOnInit(): void {

     /*this.myForm = this.formBuilder.group({
        id:'',
        fullName:['',[Validators.required,]],
        birthday:0



    });*/


    this.myForm = this.formBuilder.group({
      name: 'Sammy',
      email: '',
      message: ''
    });
      
  }


  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }

}
