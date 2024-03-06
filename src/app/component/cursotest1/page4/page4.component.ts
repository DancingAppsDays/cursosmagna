import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component implements OnInit {

  formu!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formu = this.formBuilder.group({
      id:'',
      fullName:['',[Validators.required,]],
      birthday:0



  });
  }

}
