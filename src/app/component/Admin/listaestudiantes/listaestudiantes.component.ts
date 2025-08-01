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
  cursodata:any;

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

    this._http.get(Constants.URL+"curso").subscribe({
      
      next: res=> {
        //console.log(res);       
        this.cursodata= res ;
        if(this.cursodata['status'] == "success"){

          this.cursodata = this.cursodata['data'];
          //console.log(this.cursodata);  

          this.cursodata.forEach((item:any) => {
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
    // Create a new workbook
  const wb: XLSX.WorkBook = XLSX.utils.book_new();

  // Create the first worksheet from this.data
  const ws1: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
  XLSX.utils.book_append_sheet(wb, ws1, 'Students');

  // Create the second worksheet from this.cursodata
  const ws2: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.cursodata);
  XLSX.utils.book_append_sheet(wb, ws2, 'CoursesTimes');

  console.log(this.data);
  console.log(this.cursodata);
  
    // Filter this.data based on currentcurso = 9 in this.cursodata
    /*
    const filteredData = this.data.filter((user:any) => {
      const curso = this.cursodata.find((curso:any) => curso.idalumno === user.id);
      return curso && curso.currentcurso === 9;
    });*/
    const filteredData = this.data.map((user: any) => {
      const curso = this.cursodata.find((curso: any) => curso.idalumno === user.id && curso.currentcurso === 9);
      if (curso) {
        return {
          ...user,
          currentcurso: curso.currentcurso,
          time1: curso.time1,
          time2: curso.time2,
          time3: curso.time3,
          time4: curso.time4,
          time5: curso.time5,
          time6: curso.time6,
          time7: curso.time7,
          time8: curso.time8,
          time9: curso.time9,
          updated_at: curso.updated_at
        };
      }
      return null;
    }).filter((user: any) => user !== null);

     // Create the third worksheet from filteredData
  const ws3: XLSX.WorkSheet = XLSX.utils.json_to_sheet(filteredData);
  XLSX.utils.book_append_sheet(wb, ws3, 'Pasantes');
  
    // Write the workbook and save it
    const wbout: Blob = new Blob([XLSX.write(wb, {bookType: 'xlsx', type: 'array'})], {type: 'application/octet-stream'});
    saveAs(wbout, 'StudentData.xlsx');
  }

  }


