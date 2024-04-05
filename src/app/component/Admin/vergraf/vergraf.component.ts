import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { forkJoin } from 'rxjs';
import { Constants } from 'src/app/constants';
//import { Color, Label } from 'ng2-charts';


interface DataElement {
  a1: number;
  a2: number;
  a3: number;
  a4: number;
  a5: number;
  // other properties can go here
}

@Component({
  selector: 'app-vergraf',
  templateUrl: './vergraf.component.html',
  styleUrls: ['./vergraf.component.scss'],
 // standalone: true,
  //imports: [BaseChartDirective],
  //providers: [provideCharts, withDefaultRegisterables() ]
})


export class VergrafComponent implements OnInit {

  data:any;

  data1:any;
  data2:any;
 
  data3:any;
  data4:any;

  correct1:number[]= [4,4,4,4,4];
  false1:number[] = [0,0,0,0,0];

  correct2:number[]= [2,2,11,2,2];
  correct3:number[]= [2,2,11,2,2];
  correct4:number[]= [2,2,11,2,2];

  //only works on the first chart with basechartdirective
 // @ViewChild(BaseChartDirective) chart: BaseChartDirective; 
 

 // @ViewChild('chart2') chart2: BaseChartDirective;
 // @ViewChild('chart3') chart3: BaseChartDirective;
  //@ViewChild('chart4') chart4: BaseChartDirective;

  
  @ViewChildren(BaseChartDirective) charts: QueryList<BaseChartDirective>;

  constructor(private http: HttpClient,  private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

    //this.getdata();
    this.getdatas();

  }

  
processData(data: any) {
  return ['a1', 'a2', 'a3', 'a4', 'a5'].map(key => 
    data.reduce((count:number, element:any) => count + (element[key] === 1 ? 1 : 0), 0)
  );
}


getdatas(){
  forkJoin([
    this.http.get(Constants.URL+"quiz1"),
    this.http.get(Constants.URL+"quiz2"),
    this.http.get(Constants.URL+"quiz3"),
    this.http.get(Constants.URL+"quiz4")
  ]).subscribe({
    next: ([res1, res2, res3, res4]) => {
      this.data1 = res1;
      this.data2 = res2;
      this.data3 = res3;
      this.data4 = res4;

      if (this.data1['status'] == "success") {
        this.correct1 = this.processData(this.data1['data']);
      }

      if (this.data2['status'] == "success") {
        this.correct2 = this.processData(this.data2['data']);
      }

      if (this.data3['status'] == "success") {
        this.correct3 = this.processData(this.data3['data']);
      }

      if (this.data4['status'] == "success") {
        this.correct4 = this.processData(this.data4['data']);
      }

      let chartData = [this.correct1, this.correct2, this.correct3, this.correct4];

      this.charts.forEach((chart, index) => {
        if (chart.chart) {
          chart.chart.data.datasets[0].data = chartData[index];
          chart.chart.update();
        }
      });
    }
  });
}


//oldie
  getdata(){
    
  this.http.get(Constants.URL+"quiz1").subscribe({
      
    next: res=> {
      //console.log(res);       
      this.data= res ;
      if(this.data['status'] == "success"){

        this.data = this.data['data'];
        console.log(this.data);  

        this.correct1 = ['a1', 'a2', 'a3', 'a4', 'a5'].map(key => 
          this.data.reduce((count:number, element:any) => count + (element[key] === 1 ? 1 : 0), 0)
        );
       


        console.log(this.correct1);
       // this.chart.chart?.update();
        //this.chart.ngOnChanges({});
         // console.log(this.chart.chart);

         this.charts.forEach((chart,index) => {
          if (chart.chart) {
            chart.chart.data.datasets[0].data = this.correct1;//chartData[index];
            chart.chart.update();
          }
        });


        /*  if (this.chart.chart) {
        this.chart.chart.data.datasets[0].data = this.correct1;
        this.chart.chart?.update()
          }

            //this fails, onlt works on the first chart
          if (this.chart2.chart) {
            this.chart2.chart.data.datasets[0].data = this.correct1;
            this.chart2.chart.update();
          }
          */
       // this.chart.chart.data.datasets[0].data = this.correct1;
       // this.cdr.detectChanges();  // manually trigger change detection
        console.log("change detected");
      }
  },
  error:error=>{
    console.log(error);
    window.alert("Falla de conexión: ");// + error.error.name);
    
  }
  });


 
  }

 

  /*
  lineChartData: ChartDataset[] = [
    { data: [], label: 'Change on init' },


  ];*/
  title = 'ng2-charts-demo';
  public barChartLegend = true;
  lineChartLegend = true;
  public barChartPlugins = [];




  public barChartDatareal: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'Pregunta 1',
      'Pregunta 2',
      'Pregunta 3',
      'Pregunta 4',
      'Pregunta 5',
      'Pregunta 6',
      'Pregunta 7'
    ],
    datasets: [
      {
       // data: this.correct1,
        data: [ 8, 6, 5, 7, 2, 8, 10 ],
        label: 'Correcta',
        //fill: true,
        //tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      },
      {
        data: this.false1,//this.false1,
        //data: [ 2, 4, 5, 3, 8, 2, 0 ],
        label: 'Error',
        //fill: true,
        //tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(80,122,78,0.3)'
      }
    ]
  };



  public barChartDatareal2: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'Pregunta 1',
      'Pregunta 2',
      'Pregunta 3',
      'Pregunta 4',
      'Pregunta 5',
      'Pregunta 6',
      'Pregunta 7'
    ],
    datasets: [
      {
       // data: this.correct2,
        data: [ 8, 6, 5, 7, 2, 8, 10 ],
        label: 'Correcta',
        //fill: true,
        //tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      },
      {
        //data: this.correct2,//this.false1,
        data: [ 2, 4, 5, 3, 8, 2, 0 ],
        label: 'Error',
        //fill: true,
        //tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(80,122,78,0.3)'
      }
    ]
  };








  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'Pregunta 1',
      'Pregunta 2',
      'Pregunta 3',
      'Pregunta 4',
      'Pregunta 5',
      'Pregunta 6',
      'Pregunta 7'
    ],
    datasets: [
      {
        data: [ 8, 6, 5, 7, 2, 8, 10 ],
        label: 'Correcta',
        //fill: true,
        //tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      },
      {
        data: [ 2, 4, 5, 3, 8, 2, 0 ],
        label: 'Error',
        //fill: true,
        //tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(80,122,78,0.3)'
      }
    ]
  };







   barChartOptions: ChartOptions<'bar'> = {
    responsive: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  };
  



  public barChartData2: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'Pregunta 1',
      'Pregunta 2',
      'Pregunta 3',
      'Pregunta 4',
      'Pregunta 5',
      'Pregunta 6',
      'Pregunta 7'
    ],
    datasets: [
      {
        data: [ 5, 6, 9, 3, 4, 8, 8 ],
        label: 'Correcta',
        //fill: true,
        //tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      },
      {
        data: [ 5, 4, 1, 7, 6, 2, 2 ],
        label: 'Error',
        //fill: true,
        //tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(80,122,78,0.3)'
      }
    ]
  };


}
