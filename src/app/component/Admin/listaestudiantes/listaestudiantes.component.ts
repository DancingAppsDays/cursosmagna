import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants';
import { FilterpipePipe } from 'src/app/service/filterpipe.pipe';

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver'; //install types ??

@Component({
  selector: 'app-listaestudiantes',
  templateUrl: './listaestudiantes.component.html',
  styleUrls: ['./listaestudiantes.component.scss']
})
export class ListaestudiantesComponent implements OnInit {

  data:any;

  page: number=1;
  searchterm:string='';

  constructor(private _http: HttpClient,private router:Router) { }

  ngOnInit(): void {

    
    if(Constants.usertype!="admin" && Constants.usertype != "superadmin"){
      this.router.navigate(['/'])
      return
    }
    
    this._http.get(Constants.URL+"alumno").subscribe({
      
      next: res=> {
        //console.log(res);       
        this.data= res ;
        if(this.data['status'] == "success"){

          this.data = this.data['data'];
          console.log(this.data);  

          this.data.forEach((item:any) => {
            item.created_at = item.created_at.substring(0, 16).replace('T', ' ');
          });
        }
    },
    error:error=>{
      console.log(error);
      window.alert("Falla de conexión: ");// + error.error.name);
      
    }
    });
   
  }

  verquiz(equipo: any){
    console.log(equipo)
    this.router.navigate(['/verquiz'],{
      queryParams:{
        id:equipo.id,
        name:equipo.name,
        email:equipo.email
      }
    })

  }


  exportToExcel(): void {
    // Create a new workbook and a worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
  
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Students');
  
    // Write the workbook and save it
    const wbout: Blob = new Blob([XLSX.write(wb, {bookType: 'xlsx', type: 'array'})], {type: 'application/octet-stream'});
    saveAs(wbout, 'StudentData.xlsx');
  }

  }


