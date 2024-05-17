import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Constants } from '../constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-diploma',
  templateUrl: './diploma.component.html',
  styleUrls: ['./diploma.component.scss']
})
export class DiplomaComponent implements OnInit {

  name: string = '';
  successdata: any;
  studendid = Constants.userId;
  date: Date;
  datestring: string = "";

  constructor(private httpclient: HttpClient) { }

  printdiploma() {

    (document.getElementById('download') as HTMLElement).addEventListener('click', function () {
      const diploma = document.querySelector('.diploma') as HTMLElement;
      const img = new Image();
      img.crossOrigin = "anonymous"; // This enables CORS
      img.src = '../../assets/Banners/MAGNA-6.1.png'; // Replace with the path to your image

      img.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = diploma.offsetWidth;
        canvas.height = diploma.offsetHeight;
        const ctx = canvas.getContext('2d');

        // Draw the image onto the canvas
        ctx!.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Then render the HTML on top
        html2canvas(diploma!, { canvas: canvas }).then(diplomaCanvas => {
          const imgData = diplomaCanvas.toDataURL('image/png');
          const pdf = new jsPDF('l', 'mm', [210, 297]); // A4 size page of PDF in landscape mode

          const diplomaAspectRatio = diplomaCanvas.width / diplomaCanvas.height;
          const pdfPageHeight = pdf.internal.pageSize.getHeight();
          const pdfPageWidth = pdf.internal.pageSize.getWidth();
          let width, height;

          if (diplomaAspectRatio > (pdfPageWidth / pdfPageHeight)) {
            // Width is the limiting factor
            width = pdfPageWidth;
            height = width / diplomaAspectRatio;
          } else {
            // Height is the limiting factor
            height = pdfPageHeight;
            width = height * diplomaAspectRatio;
          }

          // Center the image
          const x = (pdfPageWidth - width) / 2;
          const y = (pdfPageHeight - height) / 2;

          // Add the HTML content
          pdf.addImage(imgData, 'PNG', x, y, width, height);
          pdf.save("download.pdf");
        });
      };
    });

  }


  printimagetext() {
    (document.getElementById('download') as HTMLElement).addEventListener('click', function () {
      const img = new Image();
      img.crossOrigin = "anonymous"; // This enables CORS
      img.src = '../../assets/Felicitaciones/MAGNA-felicitacion6-2.png'; // Replace with the path to your image

      img.onload = function () {
        const pdf = new jsPDF('l', 'mm', [210, 297]); // A4 size page of PDF in landscape mode
        const pdfPageHeight = pdf.internal.pageSize.getHeight();
        const pdfPageWidth = pdf.internal.pageSize.getWidth();

        // Calculate the size of the image
        const imgAspectRatio = img.width / img.height;
        let width, height;

        if (imgAspectRatio > (pdfPageWidth / pdfPageHeight)) {
          // Width is the limiting factor
          width = pdfPageWidth;
          height = width / imgAspectRatio;
        } else {
          // Height is the limiting factor
          height = pdfPageHeight;
          width = height * imgAspectRatio;
        }

        // Center the image
        const x = (pdfPageWidth - width) / 2;
        const y = (pdfPageHeight - height) / 2;

        // Convert the image to a data URL
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx!.drawImage(img, 0, 0, img.width, img.height);
        const imgData = canvas.toDataURL('image/png');

        // Add the image to the PDF
        pdf.addImage(imgData, 'PNG', x, y, width, height);
        pdf.save("download.pdf");
      };
    });
  }


  printtest2() {

    const component = this; //to avoid confusing this. on htmlelemnt

    (document.getElementById('download') as HTMLElement).addEventListener('click', function () {
      console.log("print");
      const img = new Image();
      img.crossOrigin = "anonymous"; // This enables CORS
      img.src = '../../assets/files/DIPLOMAMagna01_pages-to-jpg-0001.jpg'; // Replace with the path to your image
      console.log("printafterimg");

      img.onload = () => {
        console.log("onloadimage");
        const pdf = new jsPDF('l', 'mm', [210 / 2, 297 / 2]); // A4 size page of PDF in landscape mode
        const pdfPageHeight = pdf.internal.pageSize.getHeight();
        const pdfPageWidth = pdf.internal.pageSize.getWidth();

        // Calculate the size of the image
        const imgAspectRatio = img.width / img.height;
        let width, height;

        if (imgAspectRatio > (pdfPageWidth / pdfPageHeight)) {
          // Width is the limiting factor
          width = pdfPageWidth;
          height = width / imgAspectRatio;
        } else {
          // Height is the limiting factor
          height = pdfPageHeight;
          width = height * imgAspectRatio;
        }

        // Center the image
        const x = (pdfPageWidth - width) / 2;
        const y = (pdfPageHeight - height) / 2;

        // Convert the image to a data URL
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx!.drawImage(img, 0, 0, img.width, img.height);
        const imgData = canvas.toDataURL('image/jpg');

        // Add the image to the PDF
        pdf.addImage(imgData, 'jpg', x, y, width, height);

        // Add the text on top of the image
        pdf.setFontSize(15);


        pdf.setFont('Times', 'bold');
        pdf.text(component.name, pdfPageWidth / 2, pdfPageHeight / 2.2, { align: 'center' }); // Add the text

        pdf.setFontSize(14);
        pdf.setFont('Montserrat', 'bold');
        pdf.setTextColor(255, 0, 0);
        pdf.text(component.datestring, pdfPageWidth / 2, pdfPageHeight / 1.3, { align: 'center' }); // Add the text

        pdf.save("diplomacursoseguridadMagna.pdf");
      };
    });
  }


  getcurso() {

    console.log(Constants.URL + "curso/alumno/" + this.studendid);

    this.httpclient.get(Constants.URL + "curso/alumno/" + this.studendid/*,  { headers: { Authorization:localStorage.getItem('token') } }*/).subscribe({
      next: data => {//console.log(data);

        this.successdata = data;
        //console.log(this.successdata);
        if (this.successdata['status'] == 'success') {
          console.log("curso terminado");
          this.successdata = this.successdata['data'];


          // this.date = this.successdata['updated_at'];
          this.date = new Date(this.successdata['updated_at']);
          let formattedDate = `${this.date.getDate()}-${this.date.getMonth() + 1}-${this.date.getFullYear().toString().substr(-2)}`;
          console.log(formattedDate);
          this.datestring = formattedDate;

        } else {
          //console.log(this.successdata)
          // window.alert("  Registro falló, revisa que el correo no sea repetido");
        }


      }, error:
        error => { //window.alert("  Registro falló");
          console.log(error);
        }
    });
  }

  ngOnInit(): void {


    this.getcurso();

    this.name = sessionStorage.getItem("name") ? sessionStorage.getItem("name")! : "Nombre apellido";
    //this.printdiploma();
    // this.printimagetext();
    this.printtest2();
  }
}
